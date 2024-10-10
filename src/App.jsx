import './App.css';
import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import AccessToken from './components/AccessToken';

function App() {

  /*Initialize the songs of the search results as songs with a UseState */
  const mockSongs = [
    {
      "title" : "First Song",
      "artist" : "First Artist",
      "album" : "First Album",
      "uri" : "spotify:track:aaahFgbbKwnb9MLmUQDhG6"
    },
    {
      "title" : "Second Song",
      "artist" : "Second Artist",
      "album" : "Second Album",
      "uri" : "spotify:track:bbbbFgbbKwnb9MLmUQDhG6"
    },
    {
      "title" : "Third Song",
      "artist" : "Third Artist",
      "album" : "Third Album",
      "uri" : "spotify:track:ccchFgbbKznb9MLmUQDhG6"
    }
  ];
  
  const [results, setResults] = useState(mockSongs);

  /*Initialize the playlist data with a playList useState */
  const mockPlaylist = {
      "name": "My First Playlist",
      "songs": [
        {
          "title": "First Song",
          "artist": "First Artist",
          "album": "First Album",
          "uri" : "spotify:track:dddhFgbcKznb9MLmUQDhG6"
        },
        {
          "title": "Third Song",
          "artist": "Third Artist",
          "album": "Third Album",
          "uri" : "spotify:track:eeehFgbbKznb9MLmUQDhG6"
        },
        {
          "title": "Second Song",
          "artist": "Second Artist",
          "album": "Second Album",
          "uri" : "spotify:track:fffhFgbbKznb9MLmUQDhG6"
        }
      ]
    }
  ;

  const [playlist, setPlaylist] = useState(mockPlaylist);

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

  AccessToken().then(response => {
      console.log(response)
  });

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
