import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Jammming</h1>
        <SearchBar />
      </header>
      <main>
        <SearchResults />
        <Playlist />
      </main>
    </div>
  );
}

export default App;
