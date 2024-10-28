//import getRandomString from './getRandomString';

var client_id = process.env.REACT_APP_CLIENT_ID;
var client_secret = process.env.REACT_APP_CLIENT_SECRET;
let accessToken = '';
let state = 'gmzoivscdiuetFZBFEKjzUVDYwi';

const Spotify = {

  // function redirects user to Spotify to ask for permission, comes back to main page with state and code
  getAuthorization() {
    const redirect_uri= 'http://localhost:3000/';
    const response_type = 'code';
    const scope = 'playlist-modify-private playlist-modify-public user-read-private user-read-email';

    const authUrl = new URL('https://accounts.spotify.com/authorize')
    
    authUrl.searchParams.append('client_id', client_id);
    authUrl.searchParams.append('response_type', response_type);
    authUrl.searchParams.append('redirect_uri', redirect_uri);
    authUrl.searchParams.append('state', state);
    authUrl.searchParams.append('scope', scope);
    authUrl.searchParams.append('show_dialog', false);

    window.location.href = authUrl;
    console.log('state sent in getAuthorization', state);
  },

  // after getAuthorization is done, we get the code and state from url, if the state we received matches the one we sent, returns code
  getCode() {
    //logs error if there is one
    const error = window.location.href.match(/error=([^&]*)/);
    if (error !== null) {
      console.log('error:', error[1]);
      return;
    };

    //gets code
    const codeMatch = window.location.href.match(/code=([^&]*)/);
    const code = codeMatch[1];
    console.log('code : ', code);

      //gets state
    const stateMatch = window.location.href.match(/state=([^&]*)/)
    const stateUrl = stateMatch[1];

    // checks if states match
    if (state === stateUrl) {
      //console.log("States do match");
      return code;
    } else {
      console.log("States don't match: state", state, "/ state dans url", stateUrl);
    };
  },

  getAccessToken() {
    //don't execute if accessToken is already present
      // no idea if this condition works or has been used ever by the computer
    if (accessToken !== '') { 
      console.log('AccessToken was already set')
      return accessToken
    };

    const code = Spotify.getCode();
    const redirect_uri= 'http://localhost:3000/';

    return fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: new URLSearchParams({
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': redirect_uri
      }),
      headers: {
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(response => {
      if (!response.ok) {
        return response.text().then(text => {
          console.log('Error response body:', text); // Log the response body for debugging
          throw new Error('Network response was not ok trying to exchange your code for a token');
        });
      }
        return response.json(); 
      }
    ).then(
      jsonData => {
        if (!jsonData.access_token) {
          console.log('Access token missing in response:', jsonData); // Log the entire jsonData for debugging
          throw new Error('Access token missing in response');
        }

        accessToken = jsonData.access_token;
        console.log('jsonData response', jsonData);
        console.log('accessToken from json :', accessToken);
        return accessToken;
      }
    ).catch(error => {
      console.log('Error fetching access token:', error);
      throw error; }
    );
  },

  // NEED TO PROCESS THE RESPONSE - gets proper response
  searchTerm(term) {
    const token = Spotify.getAccessToken();
    const searchUrl = new URL('https://api.spotify.com/v1/search');

    searchUrl.searchParams.append('q', term);
    searchUrl.searchParams.append('type', 'track');
    searchUrl.searchParams.append('limit', 10);

    return fetch( searchUrl , {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      },
    }).then(response => {
      if (!response.ok) {
        return response.text().then(text => {
          console.log('Error response body:', text); // Log the response body for debugging
          throw new Error('Network response was not ok in get search term');
        });
      }
        return response.json(); 
      }
    ).then(jsonResponse => {
      if (!jsonResponse.tracks) {
        return [];
      }

      console.log('json data from search term : ', jsonResponse)

      return jsonResponse.tracks.items.map(track => ({
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
        id: track.id,
      }));
    });
  },

  savePlaylistToSpotify(name, trackUris) {
    console.log('you clicked save');
    const firstCondition = !name;
    const secondCondition = !trackUris;
    console.log('first condition :', firstCondition, '. Second condition :', secondCondition);
    if (!name || !trackUris) {
      console.log('conditional caught the save');
      return;
    }

    const token = Spotify.getAccessToken();
    let userId; 

    return fetch('https://api.spotify.com/v1/me', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }).then(response => {
            
      if (!response.ok) {
        return response.text().then(text => {
          console.log('Error response body:', text); // Log the response body for debugging
          throw new Error('Network response was not ok in getting current user');
        });
      };

      return response.json();}
    ).then(
      jsonresponse =>
        {
          userId = jsonresponse.id;
          console.log('jsonresponse to asking for user :', jsonresponse);
          return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
            method: 'POST',
            headers: {
              'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({name: name})
          }).then(response => {
            
            if (!response.ok) {
              return response.text().then(text => {
                console.log('Error response body:', text); // Log the response body for debugging
                throw new Error('Network response was not ok in post playlist name');
              });
            };

            return response.json();}
          ).then(jsonresponse => 
            {
              console.log(`json response to posting playlist name :`, jsonresponse);
              const playlistId = jsonresponse.id;
              return fetch(`https://api.spotify.com/v1/playlists/${playlistId}/tracks`, {
                method: 'POST',
                headers: {
                  'Authorization': 'Bearer ' + token,
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({uris: trackUris})
              })
            }
          )
        }
    )


  }
};

export {Spotify};
export {accessToken};