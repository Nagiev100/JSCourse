import React, {useState} from 'react';
import {RoutNavigationContainer} from "./navigation/RoutNavigationContainer";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {ThemeProvider} from "styled-components";
import {useTheme} from "./hooks/useTheme";
import {darkTheme, lightTheme} from "./constans/theme";
import { Global } from './helpers/GlobalStyle';


function App() {
    const {theme,themeToggler}= useTheme()
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Provider store={store}>
                <Global/>
                <RoutNavigationContainer themeToggler={themeToggler} theme={theme}/>
            </Provider>
        </ThemeProvider>

    );
}

export default App;
