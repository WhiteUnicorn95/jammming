import React from 'react';
import styles from './Tracklist.module.css';
import Track from './Track';

function Tracklist({songs, addButton, removeButton}) {
    return <>
        {songs.map(
            song => (
                <Track song={song} addButton={addButton} removeButton={removeButton} />
            )
        )}
    </>
};

export default Tracklist;