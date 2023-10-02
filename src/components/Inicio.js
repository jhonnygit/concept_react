import logo from '../logo.svg';
import '../App.css';
import Contador from '../component/contador';
import Formulario from '../component/formulario';
import SimpleCrud from '../simplecrud/simplecrud';
import Saludo from '../component/saludo';
import Listas from '../component/lista';

const Inicio=()=> {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
        <Contador />
        <Listas></Listas>
        <Formulario></Formulario>
        <Saludo nombre="Jhonny"></Saludo>        
      </header>
      <SimpleCrud></SimpleCrud>
    </div>
  );
}

export default Inicio;