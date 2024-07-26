import React from 'react';
import styles from './SearchResults.module.css';
import Track from './Track';

function SearchResults({songs}) {
    return <div className = {styles.maindiv}>
        <h2>Results</h2>
        {songs.map(
            song => (
                <Track song={song} />
            )
        )}
    </div>;
};

export default SearchResults;