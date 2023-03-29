import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Form from "./form";
import App from "./App";
import React from "react";
import { Link } from "react-router-dom";
function Start () {

    return (
        <div>

            <Form />

            <Link to="/search">test</Link>
            
        </div>
    )
}

export default Start;
