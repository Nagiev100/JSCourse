import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {SignUp} from "../pages/signUp/SignUp";
import {Home} from "../pages/home/Home";
import {NotFoundPage} from "../pages/notFoundPage/NotFoundPage";
import {ProtectedRoute} from "./ProtectedRoute";



export const RoutNavigationContainer: FC = () => {
    return(
        <Routes>
            <Route path='SignUp' element={<SignUp/>}/>
            <Route path='/' element=
                {
                    <ProtectedRoute>
                        <Home/>
                    </ProtectedRoute>
                }/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>


    )
}