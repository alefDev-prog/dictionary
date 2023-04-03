import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function Loading() {

    return (
        <div id="loading-wrapper">
            <FontAwesomeIcon icon={faSpinner} id="loading-icon"/>
        </div>
        
    )
}

export default Loading;