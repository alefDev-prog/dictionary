import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { getWordInfo} from './redux/wordSlice';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import React from "react";
import { useNavigate } from 'react-router';

function Form() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
      }
    
      const search = (e) => {
        e.preventDefault();
        dispatch(getWordInfo(input));
        
        if(!window.location.pathname.includes("search")) {
            navigate("/search");
        }
        

        
      }

    return (
        <form id="search-form"onSubmit={search}>
        <input id="input" type="text" onChange={handleChange} autoFocus placeholder='Enter word'/>
        <button type="submit" id="submit" name="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </form>
    )
}

export default Form;