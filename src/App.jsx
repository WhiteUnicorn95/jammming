// import css and React
import './App.css';
import React, {useState} from 'react';

// import components
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

// import utilities
import {mockSongs, mockPlaylistTracks} from './util/MockData';
import GetAccessToken from './util/Spotify';

function App() {
  
  // initialize the useStates
  const [results, setResults] = useState(mockSongs);
  const [playlistTracks, setPlaylistTracks] = useState(mockPlaylistTracks);
  const [playlistName, setPlaylistName] = useState("My New Playlist");

  // functions to handle actions
  const search = (term) => {
    // add logic calling Spotify.js to search with a term
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const addSongToPlaylist = (song) => {
    setPlaylistTracks((prevPlaylistTracks) => ([...prevPlaylistTracks, song]
    ));
  };

  const removeSongFromPlaylist = (songToRemove) => {
    const updatedPlaylist = 
      playlistTracks.filter((song) => song !== songToRemove)
    ;
    setPlaylistTracks(updatedPlaylist);
  };

  const savePlaylistToSpotify = (playlist) => {
    // add logic to save to spotify + pass in playlist 
  };

  return (
    <div className='app' >
      <h1 className='h1'> I am Jammming</h1>
      <SearchBar setResults={setResults} />
      <SearchResults
        results={results}
        onAddSong={addSongToPlaylist}
      />
      <Playlist 
        playlistTracks={playlistTracks}
        playlistName={playlistName}
        onNameUpdate={updatePlaylistName}
        onRemoveSong={removeSongFromPlaylist}
        onSave={savePlaylistToSpotify}
      />
    </div>
  );
}

export default App;
