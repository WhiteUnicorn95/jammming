import React from 'react';
import styles from './Track.module.css';

function Track({song, addButton, removeButton, onAddSong, onRemoveSong}) {

    return <div className = {styles.song}>
        <ul className={styles.description}>
            <li>Title : {song.name}</li>
            <li>Artist : {song.artist}</li>
            <li>Album : {song.album}</li>
        </ul>

        {addButton && <button className = {styles.addButton} onClick={() => onAddSong(song)} >Add</button> }
        {removeButton && (<button className= {styles.removeButton} onClick={() => onRemoveSong(song)}>Remove</button>)}
        </div>
    };

export default Track;