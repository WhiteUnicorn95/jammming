import React from 'react';
import styles from './Playlist.module.css';
import Track from './Track';
import Tracklist from './Tracklist';

function Playlist({playlist}) {
    console.log(playlist);

    return <div className = {styles.maindiv}>
        <h2>Playlist</h2>
        <p>Here will be the tracklist made up of tracks</p>
        <h3>{playlist.name}</h3>
        <button>Save to Spotify</button>
    </div>;
};

export default Playlist;