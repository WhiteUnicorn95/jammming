import React, {useState} from 'react';
import styles from './Playlist.module.css';
import Tracklist from './Tracklist';

function Playlist({playlist, setPlaylist, removeSongFromPlaylist}) {
    const [isEditingName, setIsEditingName] = useState(false);

    const handleOnClick = () => {
        setIsEditingName(true);
    };

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
        setIsEditingName(false);
    };

    return <div className = {styles.maindiv}>
        {isEditingName ? (
        <input
          type="text"
          value={playlist.name}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
      ) : (
        <h2 onClick={handleOnClick}>{playlist.name}</h2>
      )}
        <Tracklist songs={playlist.songs} addButton={false} removeButton={true} removeSongFromPlaylist={removeSongFromPlaylist} />
        <button>Save to Spotify</button>
    </div>;
};

export default Playlist;