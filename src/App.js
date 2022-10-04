import img from '../src/assets/ball.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={img} className="App-logo" alt="logo" />
        <h1>
          We are Coming soon ...
        </h1>
        <a
          className="App-link"
          href="https://sawajr.netlify.app"
        >
          Go Back
        </a>
      </header>
    </div>
  );
}

export default App;
