import getRandomString from './getRandomString';

var client_id = process.env.REACT_APP_CLIENT_ID;
var client_secret = process.env.REACT_APP_CLIENT_SECRET;
let accessToken = '';
let state = 'gmzoivscdiuetFZBFEKjzUVDYwi';

/*async function GetAccessToken() {
    
    //const authorization_response = 

    // client credentials flow
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: new URLSearchParams({
        'grant_type': 'client_credentials',
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
      },
    });

    console.log(client_id, client_secret);
  
    return await response.json();
};*/

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

      //gets state
    const stateMatch = window.location.href.match(/state=([^&]*)/)
    const stateUrl = stateMatch[1];

    // checks if states match
    if (state === stateUrl) {
      console.log("States do match");
      return code;
    } else {
      console.log("States don't match: state", state, "/ state dans url", stateUrl);
    };
  
  },
};

export {Spotify};
export {accessToken};