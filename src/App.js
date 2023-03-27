import './css/style.css';
import Display from './display.js';
import {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { getWordInfo } from './redux/wordSlice';
//api for dictionary: https://dictionaryapi.dev/
function App() {
  const dispatch = useDispatch();
  const [test, setTest] = useState(null);
  const {information} = useSelector((store) => store.getWord)
  
  
  useEffect(()=> {
    console.log(information);
    dispatch(getWordInfo());
    setTimeout(()=> {
      console.log(information[0].word);
    }, 1000);
  },[])


  return (
    <div className="App">
      <input type="text" autoFocus />
      <Display />
      <p>{information[0].word}</p>

    </div>
  );
}

export default App;
