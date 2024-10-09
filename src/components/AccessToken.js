async function AccessToken() {

    var client_id = process.env.REACT_APP_CLIENT_ID;
    var client_secret = process.env.REACT_APP_CLIENT_SECRET;
    
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
  
    return await response.json();
};

export default AccessToken;