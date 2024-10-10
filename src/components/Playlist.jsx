import React, {useState} from 'react';
import styles from './Playlist.module.css';
import Tracklist from './Tracklist';

function Playlist({playlist, setPlaylist, removeSongFromPlaylist}) {

    const handleOnChange = (event) => {

        setPlaylist((prevPlaylist) => ({
            ...prevPlaylist,
            name: event.target.value
          }));
    };

    const handleOnBlur = (event) => {
        setPlaylist((prevPlaylist) => ({
            ...prevPlaylist,
            name: event.target.value
          }));
    };

    const handleSave = () => {
        setPlaylist({
            "name": "",
            "songs": []
          });
    };

    return <div className = {styles.maindiv}>
        <input
          type="text"
          value={playlist.name}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
        <Tracklist songs={playlist.songs} addButton={false} removeButton={true} removeSongFromPlaylist={removeSongFromPlaylist} />
        <button onClick={handleSave}>Save to Spotify</button>
    </div>;
};

export default Playlist;