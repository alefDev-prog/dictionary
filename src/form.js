import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { getWordInfo, setInformation } from './redux/wordSlice';
import {useEffect, useState} from 'react';
import { useSelector, useDispatch} from 'react-redux';
import React from "react";

function Form() {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

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
        <form id="search-form"onSubmit={search}>
        <input id="input" type="text" onChange={handleChange} autoFocus placeholder='Enter word'/>
        <button type="submit" id="submit" name="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
    )
}

export default Form;