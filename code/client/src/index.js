import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

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



    /* HomePageSvgIcon */ 
    .cls-1,
    .cls-3 {
    fill: #3182ce;
    }
    .cls-1,
    .cls-15,
    .cls-6 {
    opacity: 0.1;
    }
    .cls-1,
    .cls-15,
    .cls-16,
    .cls-4,
    .cls-6 {
    isolation: isolate;
    }
    .cls-17,
    .cls-2 {
    fill: none;
    stroke-miterlimit: 10;
    }
    .cls-2 {
    stroke: #535461;
    stroke-width: 2px;
    }
    .cls-15,
    .cls-4,
    .cls-8 {
    fill: #fff;
    }
    .cls-4 {
    opacity: 0.5;
    }
    .cls-5 {
    fill: #474059;
    }
    .cls-7 {
    fill: #c0bccf;
    }
    .cls-9 {
    fill: #e8eaf1;
    }
    .cls-10 {
    fill: url(#linear-gradient);
    }
    .cls-11 {
    fill: #b96b6b;
    }
    .cls-12 {
    fill: #ffb9b9;
    }
    .cls-13 {
    fill: #fec5d9;
    }
    .cls-14 {
    fill: #747b9c;
    }
    .cls-16 {
    opacity: 0.2;
    }
    .cls-17 {
    stroke: #3182ce;
    }
    .cls-18 {
    fill: url(#linear-gradient-2);
    }
    .cls-19 {
    fill: #d6e6f9;
    }
    .cls-20 {
    fill: #5f546f;
    }
    .cls-21 {
    fill: #ffced8;
    }
    .cls-22 {
    fill: #bc8387;
    }
    .cls-23 {
    fill: #ae767a;
    }
    .cls-24 {
    fill: #cb919b;
    }
    .cls-25 {
    fill: #5a5773;
    }
`;

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <Router>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
