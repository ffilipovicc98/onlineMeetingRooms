import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

import rootReducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const GlobalStyle = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: inherit;
    }

    html {
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        color: #000;
    }

    body {
    height: 100vh;
    overflow: hidden;
    color: #eeeeee;
}

    #root {
        background-color: rgb(41, 41, 41);
        height: 100%;
    }
    
`;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
