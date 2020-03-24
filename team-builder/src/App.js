import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {

  const [formValues, setFormValues] = useState({
    fname: '',
    lname: '',
    roles: '',
  })
  const onInputChange = event => {
    // use the event object
    // to fish out WHICH input is having the change event
    const inputThatChanged = event.target.name
    // to fish out the current value
    const newValueForInput = event.target.value
    // and replace the WHOLE formValues object
    setFormValues({
      // with a new one that's a copy of the old one
      ...formValues,
      // BUT with a little override
      [inputThatChanged]: newValueForInput,
    })
  }

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
      </header>
    </div>
  );
}

export default App;
