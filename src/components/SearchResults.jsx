import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from './Tracklist';

function SearchResults({results, onAddSong}) {
    return <div className = {styles.maindiv}>
        <h2>Results</h2>
        <Tracklist songs={results} addButton={true} removeButton={false} onAddSong={onAddSong} />
    </div>;
};

export default SearchResults;