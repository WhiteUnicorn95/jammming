import React from 'react';
import styles from './SearchResults.module.css';
import Tracklist from './Tracklist';

function SearchResults({results, addSongToPlaylist}) {
    return <div className = {styles.maindiv}>
        <h2>Results</h2>
        <Tracklist songs={results} addButton={true} removeButton={false} addSongToPlaylist={addSongToPlaylist} />
    </div>;
};

export default SearchResults;