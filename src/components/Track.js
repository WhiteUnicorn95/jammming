import React from 'react';
import styles from './Track.module.css';

function Track({song}) {
    return <>
        <ul>
            <li>Title : {song.title}</li>
            <li>Artist : {song.artist}</li>
            <li>Album : {song.album}</li>
        </ul>
    </>
};

export default Track;