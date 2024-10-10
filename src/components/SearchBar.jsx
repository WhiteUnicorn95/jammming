import React from 'react';
import styles from './SearchBar.module.css';

var client_id = process.env.REACT_APP_CLIENT_ID;
var client_secret = process.env.REACT_APP_CLIENT_SECRET;

function SearchBar({setResults}) {

    async function loadData() {
        try {
            const response = await fetch('https://accounts.spotify.com/api/token', {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                  'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret),
                },
              });
            if (!response.ok) {
              throw new Error(`Response status: ${response.status}`);
            }
        
            const json = await response.json();
            console.log(json);
            setResults(json);
          } catch (error) {
            console.error(error.message);
          }
    };

    return <>
    <input id='searchBar' type='text'></input>
    <button id='searchButton' onClick={loadData()} >Search</button>
    </>;
};

export default SearchBar;