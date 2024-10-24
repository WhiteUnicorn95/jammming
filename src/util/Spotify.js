import getRandomString from './getRandomString';

var client_id = process.env.REACT_APP_CLIENT_ID;
var client_secret = process.env.REACT_APP_CLIENT_SECRET;
let accessToken = '';
let state = 'gmzoivscdiuetFZBFEKjzUVDYwi';

const Spotify = {

  // function redirects user to Spotify to ask for permission, comes back to main page with state and code
  getAuthorization() {
    const redirect_uri= 'http://localhost:3000/';
    const response_type = 'code';
    const scope = 'playlist-modify-private playlist-modify-public user-read-private';

    const authUrl = new URL('https://accounts.spotify.com/authorize')
    
    authUrl.searchParams.append('client_id', client_id);
    authUrl.searchParams.append('response_type', response_type);
    authUrl.searchParams.append('redirect_uri', redirect_uri);
    authUrl.searchParams.append('state', state);
    authUrl.searchParams.append('scope', scope);
    authUrl.searchParams.append('show_dialog', false);

    window.location.href = authUrl;
    console.log('state envoyé dans getAuthorization', state);
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
          throw new Error('Network response was not ok');
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
  }
};

export {Spotify};
export {accessToken};