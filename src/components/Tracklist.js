import React from 'react';
import styles from './Tracklist.module.css';
import Track from './Track';

function Tracklist({songs}) {
    return <>
        {songs.map(
            song => (
                <Track song={song} />
            )
        )}
    </>
};

export default Tracklist;