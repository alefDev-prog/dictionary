import './css/style.css';
import StaticInfo from './staticInfo.js';
import Definiton from './definition';
import {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getWordInfo, setInformation } from './redux/wordSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

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
      <form id="search-form"onSubmit={search}>
        <input id="input" type="text" onChange={handleChange} autoFocus placeholder='Enter word'/>
        <button type="submit" id="submit" name="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
      </form>

      <main>
        <StaticInfo />
        <Definiton />
      </main>
      
      
      

    </div>
  );
}

export default App;
