import { BrowserRouter, Switch, Route, Routes } from "react-router-dom";
import Start from './start';
import App from "./App";
import React from "react";
function AllRoutes() {
    return (
        
        
        <BrowserRouter>
            <Routes>
                <Route path="/dictionary" element={<Start />} />
                <Route path="/search" element={<App />} />
                
            </Routes>
        </BrowserRouter>    
            
        )
}

export default AllRoutes;