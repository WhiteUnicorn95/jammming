// import css and React
import styles from './App.css';
import React, {useState, useEffect} from 'react';

// import components
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

// import utilities
import {mockSongs, mockPlaylistTracks} from './util/MockData';
import {Spotify, accessToken} from './util/Spotify';

function App() {
  
  // initialize the useStates
  const [results, setResults] = useState([]);
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [playlistName, setPlaylistName] = useState("My New Playlist");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // functions to handle actions
  const search = (term) => {
    // add logic calling Spotify.js to search with a term
    Spotify.searchTerm(term).then(setResults);
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const addSongToPlaylist = (song) => {
    const songExists = playlistTracks.some((track) => track.uri === song.uri);

    if (songExists) {
      console.log('This song is already in the playlist!');
      return; // Exit the function if the song already exists
    }

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
    const playlistUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylistToSpotify(playlistName, playlistUris);
  };

  useEffect(() => {
    const checkState = window.location.href.match(/state=([^&]*)/);
    
    // si le search param state est dans l'URI, on cherche le code, sinon on redirige vers Spotify pour authentification
    if (accessToken == '' && checkState !== null) {
      console.log('We execute getAccessToken.');

      const responsegetAccessToken = Spotify.getAccessToken().then(token => {
        console.log('Access token received in App:', token);
        accessToken = token;
        // Do something with the accessToken
      }).catch(error => {
        console.error('Error fetching access token:', error);
      });

      /*.then((response) => {
        if (response.access_token) {
          console.log('Access token received:', response.access_token);
          setIsLoggedIn(true);  // Now that we have the token, set login status to true

          // Clear the code from the URL after successful token fetch
          window.history.replaceState({}, document.title, "/");

          return response;
        } else {
          console.error('Access token missing in response:', response);
        }
      })
      .catch((error) => {
        console.error('Error fetching access token:', error);
      });*/

      console.log('general accessToken in App : ', accessToken);

      
    } else {
      Spotify.getAuthorization()
    };

  }, [isLoggedIn])

  return (
    <div className='app' >
      <div className='header'>
        <h1 className='h1'>Jammming</h1>
      </div>
      <div className='body'>
        <div className='results'>
          <SearchBar 
            onSearch={search}
          />
          <SearchResults
            className= {styles.SearchResults}
            results={results}
            onAddSong={addSongToPlaylist}
          />
        </div>
        <Playlist 
          className= {styles.Playlist}
          playlistTracks={playlistTracks}
          playlistName={playlistName}
          onNameUpdate={updatePlaylistName}
          onRemoveSong={removeSongFromPlaylist}
          onSave={savePlaylistToSpotify}
        />
      </div>
    </div>
  );
}

export default App;
