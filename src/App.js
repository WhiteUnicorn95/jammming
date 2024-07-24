import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  return (
    <div className='app' >
      <h1 className='h1'> I am Jammming</h1>
      <SearchBar />
      <SearchResults />
      <Playlist />
      <p></p>
    </div>
  );
}

export default App;
