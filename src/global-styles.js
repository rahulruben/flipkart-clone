import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        background-color: #f1f3f6;
        overflow-x: hidden;

        height: 100vh;
    }
`;

export default GlobalStyles;