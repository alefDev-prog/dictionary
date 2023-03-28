import './css/style.css';
import StaticInfo from './staticInfo.js';
import Definiton from './definition';
import {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getWordInfo, setInformation } from './redux/wordSlice';

//api for dictionary: https://dictionaryapi.dev/
function App() {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const {information} = useSelector((store) => store.getWord);
  
  
  

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const search = (e) => {
    e.preventDefault();
    dispatch(getWordInfo(input));
    setTimeout(()=> {

    }, 2000);
  }


  return (
    <div className="App">
      <form onSubmit={search}>
        <input type="text" onChange={handleChange} autoFocus placeholder='Enter word'/>
        <button type="submit" id="submit" name="submit">Search</button>
      </form>
      
      <StaticInfo />
      <Definiton />
      

    </div>
  );
}

export default App;
