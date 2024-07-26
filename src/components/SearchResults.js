import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from './Tracklist';

function SearchResults({songs}) {
    return <div className = {styles.maindiv}>
        <h2>Results</h2>
        <Tracklist songs={songs} />
    </div>;
};

export default SearchResults;