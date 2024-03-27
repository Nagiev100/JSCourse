import React from 'react';
import {RoutNavigationContainer} from "./navigation/RoutNavigationContainer";
import {Provider} from "react-redux";
import {store} from "./store/store";


function App() {
    return (
        <Provider store={store}>
            <RoutNavigationContainer/>
        </Provider>
    );
}

export default App;
