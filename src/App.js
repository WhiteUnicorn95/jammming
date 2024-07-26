import './App.css';
import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {

  /*Initialize the songs of the search results as songs with a UseState */
  const mockSongs = [
    {
      "title" : "First Song",
      "artist" : "First Artist",
      "album" : "First Album"
    },
    {
      "title" : "Second Song",
      "artist" : "Second Artist",
      "album" : "Second Album"
    },
    {
      "title" : "Third Song",
      "artist" : "Third Artist",
      "album" : "Third Album"
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
          "album": "First Album"
        },
        {
          "title": "Third Song",
          "artist": "Third Artist",
          "album": "Third Album"
        },
        {
          "title": "Second Song",
          "artist": "Second Artist",
          "album": "Second Album"
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

  return (
    <div className='app' >
      <h1 className='h1'> I am Jammming</h1>
      <SearchBar />
      <SearchResults results={results} addSongToPlaylist={addSongToPlaylist} />
      <Playlist playlist={playlist} />
    </div>
  );
}

export default App;
