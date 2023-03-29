import './css/style.css';
import StaticInfo from './staticInfo.js';
import Definiton from './definition';
import {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import Form from './form';
import React from "react";

//api for dictionary: https://dictionaryapi.dev/
function App() {
  
  const {information} = useSelector((store) => store.getWord);
  
  return (
    <div className="App">
      <Form />

      <main>
        <StaticInfo />
        <Definiton />
      </main> 
      
      
      

    </div>
  );
}

export default App;
