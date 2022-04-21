import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Rev's React App Sample
        </p>
        <a
          className="App-link"
          href="https://www.archisacademy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          More Info
        </a>
      </header>
    </div>
  );
}

export default App;
