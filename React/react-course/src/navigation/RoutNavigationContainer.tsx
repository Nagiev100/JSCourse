import React, {FC} from "react";
import {Route, Routes} from "react-router-dom";
import {SignUp} from "../pages/signUp/SignUp";
import {Home} from "../pages/home/Home";
import {NotFoundPage} from "../pages/notFoundPage/NotFoundPage";
import {ProtectedRoad} from "./ProtectedRoad";



export const RoutNavigationContainer: FC = () => {
    return(
        <Routes>
            <Route path='SignUp' element={<SignUp/>}/>
            <Route path='/' element=
                {
                    <ProtectedRoad>
                        <Home/>
                    </ProtectedRoad>
                }/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>


    )
}