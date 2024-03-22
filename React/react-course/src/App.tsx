import React from 'react';
import {Route, Routes} from "react-router-dom";
import {SignUp} from "./pages/siignUp/SignUp";
import {Home} from "./pages/home/Home";
import {NotFoundPage} from "./pages/notFoundPage/NotFoundPage";


function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<SignUp/>}/>
                <Route path='Home' element={<Home/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
        </>
    );
}

export default App;
