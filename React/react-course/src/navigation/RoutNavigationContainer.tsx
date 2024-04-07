import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {SignUp} from "../pages/signUp/SignUp";
import {Home} from "../pages/home/Home";
import {NotFoundPage} from "../pages/notFoundPage/NotFoundPage";
import {ProtectedRoute} from "./ProtectedRoute";


interface Props {
    themeToggler: () => void,
    theme:string
}
export const RoutNavigationContainer: FC<Props> =  ({themeToggler, theme}) => {
    return(
        <Routes>
            <Route path='SignUp' element={<SignUp/>}/>
            <Route path='/' element=
                {
                    <ProtectedRoute>
                        <Home themeToggler={themeToggler} theme={theme}/>
                    </ProtectedRoute>
                }/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>


    )
}