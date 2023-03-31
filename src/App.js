import './css/style.css';
import StaticInfo from './staticInfo.js';
import Definiton from './definition';
import Loading from './loading';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';
import Form from './form';
import React from "react";

//api for dictionary: https://dictionaryapi.dev/
function App() {
  
  const {information, isLoading} = useSelector((store) => store.getWord);
  
  return (
    <div className="App">

      <h1 id="search-title-wrapper"><Link className="title" id="search-title"  to="/">AllanDict</Link></h1>
      <Form />

      {isLoading === false 
      ? <main>
        <StaticInfo />
        <Definiton />
      </main>
      :
      <Loading /> }

      
      
      
      

    </div>
  );
}

export default App;
