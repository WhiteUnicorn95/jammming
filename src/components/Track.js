import React from 'react';
import styles from './Track.module.css';

function Track({song, addButton, removeButton}) {
    return <>
        <ul>
            <li>Title : {song.title}</li>
            <li>Artist : {song.artist}</li>
            <li>Album : {song.album}</li>
        </ul>

        {addButton && <button>Add</button> }
        {removeButton && (<button>Remove</button>)}
        </>
    };

export default Track;