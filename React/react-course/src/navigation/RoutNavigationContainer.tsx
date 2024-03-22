import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {SignUp} from "../pages/signUp/SignUp";
import {Home} from "../pages/home/Home";
import {NotFoundPage} from "../pages/notFoundPage/NotFoundPage";


export const RoutNavigationContainer: FC = () => {
    return(
        <>
            <Routes>
                <Route path='/' element={<SignUp/>}/>
                <Route path='Home' element={<Home/>}/>
                <Route path='*' element={<NotFoundPage/>}/>
            </Routes></>
    )
}