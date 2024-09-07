import React from 'react';
import styles from './Tracklist.module.css';
import Track from './Track';

function Tracklist({songs, addButton, removeButton, addSongToPlaylist, removeSongFromPlaylist}) {

    return <>
        {songs.map(
            song => (
                <Track song={song} addButton={addButton} removeButton={removeButton} addSongToPlaylist={addSongToPlaylist} removeSongFromPlaylist={removeSongFromPlaylist} />
            )
        )}
    </>
};

export default Tracklist;