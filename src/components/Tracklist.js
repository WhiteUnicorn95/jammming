import React from 'react';
import styles from './Tracklist.module.css';
import Track from './Track';

function Tracklist({songs, addButton, removeButton, addSongToPlaylist}) {
    return <>
        {songs.map(
            song => (
                <Track song={song} addButton={addButton} removeButton={removeButton} addSongToPlaylist={addSongToPlaylist} />
            )
        )}
    </>
};

export default Tracklist;