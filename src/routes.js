import { BrowserRouter, HashRouter ,Route, Routes } from "react-router-dom";
import Start from './start';
import App from "./App";
import React from "react";
function AllRoutes() {
    return (
        
        
        <HashRouter>
            <Routes>
                <Route path="/" element={<Start />} />
                <Route path="/search" element={<App />} />
                
            </Routes>
        </HashRouter>    
            
        )
}

export default AllRoutes;