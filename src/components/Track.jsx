import React from 'react';
import styles from './Track.module.css';

function Track({song, addButton, removeButton, addSongToPlaylist, removeSongFromPlaylist}) {

    return <>
        <ul>
            <li>Title : {song.title}</li>
            <li>Artist : {song.artist}</li>
            <li>Album : {song.album}</li>
        </ul>

        {addButton && <button onClick={() => addSongToPlaylist(song)} >Add</button> }
        {removeButton && (<button onClick={() => removeSongFromPlaylist(song)}>Remove</button>)}
        </>
    };

export default Track;