import React from 'react';
import styles from './Playlist.module.css';
import Tracklist from './Tracklist';

function Playlist({playlist}) {

    return <div className = {styles.maindiv}>
        <h2>{playlist.name}</h2>
        <Tracklist songs={playlist.songs} />
        <button>Save to Spotify</button>
    </div>;
};

export default Playlist;