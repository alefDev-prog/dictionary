import './css/style.css';
import Display from './display.js';
import {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getWordInfo } from './redux/wordSlice';
//api for dictionary: https://dictionaryapi.dev/
function App() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const {information} = useSelector((store) => store.getWord);
  
  
  

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const search = () => {
    dispatch(getWordInfo(input));
  }


  return (
    <div className="App">
      <input type="text" autoFocus  onChange={handleChange}/>
      <button type="submit" id="submit" name="submit" onClick={search}>Search</button>
      <Display />
      {information === null ? <p></p> : <p>{information[0].word}</p>}
      

    </div>
  );
}

export default App;
