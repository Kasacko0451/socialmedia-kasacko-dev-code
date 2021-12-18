import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`* {
    font-family: 'Titillium Web', sans-serif;
    margin: 0;
    box-sizing: border-box;
    font-size: 62.5%;

    @media(max-width: 768px) {
        font-size: 50%;
    }
}`;

ReactDOM.render(
    <>
    <GlobalStyle />
        <App />
    </>,
document.getElementById('index')
);
