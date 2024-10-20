import React, {useState} from 'react';
import styles from './Playlist.module.css';
import Tracklist from './Tracklist';

function Playlist({playlistTracks, playlistName, onNameUpdate, onRemoveSong, onSave}) {

    const handleNameUpdate = (event) => onNameUpdate(event.target.value);

    return <div className = {styles.maindiv}>
        <input
          type="text"
          value={playlistName}
          onChange={handleNameUpdate}
        />
        <Tracklist songs={playlistTracks} addButton={false} removeButton={true} onRemoveSong={onRemoveSong} />
        <button onClick={onSave}>Save to Spotify</button>
    </div>;
};

export default Playlist;