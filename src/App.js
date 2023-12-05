import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Instalação React</h1>
        <p>1- Instale o Node.js para poder usar o npm <br/>
        2- Criar uma pasta<br/>
        3- npm create-react-app minha_pasta<br/>
        4- navegar atraves do terminal para dentro da pasta <br/>
        5- npm start</p>

        <p>
          Edit <code>src/App.js</code> and save to reload.
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
