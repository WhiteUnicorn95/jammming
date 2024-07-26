import React from 'react';
import styles from './SearchResults.module.css';

function SearchResults({songs}) {
    return <div className = {styles.maindiv}>
        <h2>Search Results</h2>
        <p>Here will be the tracklist made of tracks of the resulting search</p>
        {songs.map(
            song => (
                <ul>
                    <li>Title : {song.title}</li>
                    <li>Artist : {song.artist}</li>
                    <li>Album : {song.album}</li>
                </ul>
            )
        )}
    </div>;
};

export default SearchResults;