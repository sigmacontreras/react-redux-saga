import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Menlo, serif;
        font-size: 14px;
    }

    html, body {
        height: 100%;
        width: 100%;
    }
`