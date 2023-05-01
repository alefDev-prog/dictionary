import './css/style.css';
import StaticInfo from './components/staticInfo.js';
import Definiton from './components/definition';
import Loading from './loading';
import { Link } from 'react-router-dom';
import { useSelector} from 'react-redux';
import Form from './components/form';
import React from "react";

//api for dictionary: https://dictionaryapi.dev/
function App() {
  
  const { isLoading, error} = useSelector((store) => store.getWord);
  console.log(error);

  if(!isLoading && error === null) return (
    <div className="App">

      <h1 id="search-title-wrapper"><Link className="title" id="search-title"  to="/">DictAL</Link></h1>
      <Form />
      <main>
        <StaticInfo />
        <Definiton />
      </main>
    
    </div>
  );

  else if(isLoading) return (
    <div className="App">

      <h1 id="search-title-wrapper"><Link className="title" id="search-title"  to="/">DictAL</Link></h1>
      
      <Form />
      <Loading /> 
      
    </div>
  )

  else if(error !== null) return (

    <div className="App">
      <h1 id="search-title-wrapper"><Link className="title" id="search-title"  to="/">DictAL</Link></h1>
      <Form />
      <div id="error-wrapper">
        {
        error.includes("404") ?
        <h1 className="error-message">Word not found</h1> 
        :
        <h1 className="error-message">Network error</h1>
        }
      </div>
      


      {console.log(error)}
    </div>
  )
}

export default App;
