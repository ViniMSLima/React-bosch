import logo from './logo.svg';
import './App.css';

function App() {
  const teste = ["C","R","7"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://parspng.com/wp-content/uploads/2022/10/Cristiano-Ronaldopng.parspng.com-8.png"} className="App-logo" alt="logo" />
        <p>
          SIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
        </p>
        <p>
          {teste.map(t => t)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
