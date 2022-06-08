import logo from './logo.svg';
import './App.css';

const flag = false;
const count = 17;

function App() {
  return ( 
    <div className = "App" >
    <header className = "App-header" >
    <img src = {logo} className = "App-logo" alt = "logo" / >
    <p>
    Edit <code> src / App.js </code> and save to reload. 
    </p> 
    <p style={{
      color: 'red'
    }}> 
      Hello World!
    </p> 
    <p>
      {count}
    </p>
    <p>
      {6}
    </p>
    <p>
      {14+18}
    </p>
    <p>
      {flag && 'Flag is false'}
    </p>
    <p>
      {flag ? 'Flag is true' : 'Flag is false'}
    </p>
    <p>
      {undefined}
      {null}
      {false}
      {true}
    </p>
    <a className = "App-link"
    href = "https://reactjs.org"
    target = "_blank"
    rel = "noopener noreferrer" >
    Learn React 
    </a> 
    </header> 
    </div>
  );
}

export default App;