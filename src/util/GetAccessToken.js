async function GetAccessToken() {

    var client_id = process.env.REACT_APP_CLIENT_ID;
    var client_secret = process.env.REACT_APP_CLIENT_SECRET;
    
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
};

export default GetAccessToken;