import React from 'react';
import styles from './SearchResults.module.css';

function SearchResults() {
    return <div className = {styles.maindiv}>
        <h2>Search Results</h2>
        <p>Here will be the tracklist made of tracks of the resulting search</p>
    </div>;
};

export default SearchResults;