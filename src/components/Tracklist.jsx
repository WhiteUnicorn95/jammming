import React from 'react';
import styles from './Tracklist.module.css';
import Track from './Track';

function Tracklist({songs, addButton, removeButton, onAddSong, onRemoveSong}) {

    return <>
        {songs.map(
            song => (
                <Track key={Math.random().toString(16).slice(2)} song={song} addButton={addButton} removeButton={removeButton} onAddSong={onAddSong} onRemoveSong={onRemoveSong} />
            )
        )}
    </>
};

export default Tracklist;