import React from 'react';
import styles from './Track.module.css';

function Track({song, addButton, removeButton, onAddSong, onRemoveSong}) {

    return <>
        <ul>
            <li>Title : {song.name}</li>
            <li>Artist : {song.artist}</li>
            <li>Album : {song.album}</li>
        </ul>

        {addButton && <button onClick={() => onAddSong(song)} >Add</button> }
        {removeButton && (<button onClick={() => onRemoveSong(song)}>Remove</button>)}
        </>
    };

export default Track;