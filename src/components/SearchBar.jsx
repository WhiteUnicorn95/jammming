import React from 'react';
import styles from './SearchBar.module.css';

var client_id = process.env.REACT_APP_CLIENT_ID;
var client_secret = process.env.REACT_APP_CLIENT_SECRET;

function SearchBar({setResults}) {

    return <>
    <input id='searchBar' type='text'></input>
    <button id='searchButton' >Search</button>
    </>;
};

export default SearchBar;