import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  body {
    background-color: white;
    height: 100vh;
    overscroll-behavior: none;
    width: 100%;
    margin: 0;
  }
  a{
      text-decoration: none;
  }
  button {
    border: 0;
    background-color: transparent;
    cursor: pointer;
    padding: 0;
  }
  #app{
    overflow-x: hidden;
    min-height: 100vh;
    display:flex;
    width: 100%;
  }
`
