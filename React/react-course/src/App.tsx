import React from 'react';
import {Route} from "react-router-dom";
import {SignUp} from "./pages/pageSignUp/SignUp";
import {Home} from "./pages/pageHome/home";
import {NotFoundPage} from "./pages/pageNotFoundPage/notFoundPage";


function App() {
    return (
        <>
            <Route path='/' element={<SignUp/>}/>
            <Route path='Home' element={<Home/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </>
    );
}

export default App;
