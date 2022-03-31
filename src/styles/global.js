import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    * {
        margin: 0;
        padding: 0;
    }

    html, body {
        height: 100%;
        font-family: "Montserrat", sans-serif;
        
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
        background: ${({ theme }) => theme.primaryDark};
        color: ${({ theme }) => theme.primaryLight};
        
    }

    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }

    input, button, textarea, select {
        font: inherit;
        font-size: 1rem;
    }

    button{
        cursor: pointer;
    }

    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    #root, #__next {
        isolation: isolate;
    }

    :root{
        --color-primary: #4B4A54;
        --color-secondary: #F3E4F1;
        --color-tertiary: #9B6D96;
        
    }

    * {
        scrollbar-width: thin;
        scrollbar-color: var(--color-scrollbar) var(--color-scrollbar);
    }

    *::-webkit-scrollbar {
        width: 8px;
        height: 10px;
    }

    *::-webkit-scrollbar-track {
        background-color: transparent;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #a7aad4;
        border-radius: 20px;
        border: 1px solid #a7aad4;
    }

    

    .success-toast {
        background: transparent !important;
        color: aliceblue !important;
    }

    .error-toast{
        background: transparent !important;
        color: aliceblue !important;
    }

`;
