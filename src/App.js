import './css/style.css';
import Display from './display.js';
import {useEffect, useState} from 'react';
//api for dictionary: https://dictionaryapi.dev/
function App() {
  const [test, setTest] = useState(null);
  const load = async () => {
    const response = await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello",
     {
      method:"GET",
      headers: {
        'content-type': 'application/json'
      }
     });
     const data = await response.json();
     console.log(data);
  }
  useEffect(()=> {
    load();
  },[])
  return (
    <div className="App">
      <input type="text" autoFocus />
      <Display />

    </div>
  );
}

export default App;
