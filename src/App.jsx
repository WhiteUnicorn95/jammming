// import css and React
import './App.css';
import React, {useState} from 'react';

// import components
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

// import utilities
import {mockSongs, mockPlaylist} from './util/mockData';
import GetAccessToken from './util/GetAccessToken';

function App() {
  
  // initialize the useStates
  const [results, setResults] = useState(mockSongs);
  const [playlist, setPlaylist] = useState(mockPlaylist);

  // functions to handle actions

  const addSongToPlaylist = (song) => {
    setPlaylist((prevPlaylist) => ({
      ...prevPlaylist,
      songs: [...prevPlaylist.songs, song]
    }));
  };

  const removeSongFromPlaylist = (songToRemove) => {
    const updatedPlaylist = {
      ...playlist,
      songs: playlist.songs.filter((song) => song !== songToRemove)
    };
    setPlaylist(updatedPlaylist);
  };

  return (
    <div className='app' >
      <h1 className='h1'> I am Jammming</h1>
      <SearchBar setResults={setResults} />
      <SearchResults results={results} addSongToPlaylist={addSongToPlaylist} />
      <Playlist playlist={playlist} setPlaylist={setPlaylist} removeSongFromPlaylist={removeSongFromPlaylist} />
    </div>
  );
}

export default App;
