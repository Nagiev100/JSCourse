import React  from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import { Global } from './helpers/GlobalStyle';
import {ThemeProvider} from "styled-components";
import {theme} from "./helpers/responsive";
import './i18';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <React.StrictMode>
                <App/>
                <Global/>
            </React.StrictMode>
        </BrowserRouter>
    </ThemeProvider>
);

