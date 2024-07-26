import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from './Tracklist';
import Track from './Track';

function SearchResults({songs}) {
    return <div className = {styles.maindiv}>
        <h2>Results</h2>
        <p>Here will be the tracklist made of tracks of the resulting search</p>
        <Tracklist songs={songs} />
    </div>;
};

export default SearchResults;