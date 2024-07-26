import './App.css';
import React, {useState} from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  const [songs, setSongs] = useState([]);

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

  setSongs(mockSongs);

  return (
    <div className='app' >
      <h1 className='h1'> I am Jammming</h1>
      <SearchBar />
      <SearchResults songs={songs} />
      <Playlist />
    </div>
  );
}

export default App;
