import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { getWordInfo} from '../redux/wordSlice';
import {useRef, useState} from 'react';
import {useDispatch} from 'react-redux';
import React from "react";
import { useNavigate } from 'react-router';

function Form() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const wordInput = useRef(null);

 
    const search = (e) => {
    e.preventDefault();

    const word = wordInput.current.value;
    dispatch(getWordInfo(word));
    
        if(!window.location.pathname.includes("search")) {
            navigate("/search");
        }
        

    
    }

    return (

        <div id="search-form-wrapper">
            <form id="search-form"onSubmit={search}>
                <input id="input" ref={wordInput}type="text" autoFocus placeholder='Enter word'/>
                <button type="submit" id="submit" name="submit"><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
        </div>
        
    )
}

export default Form;