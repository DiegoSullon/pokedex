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
    background-color: #263238;
    height: 100vh;
    overscroll-behavior: none;
    width: 100%;
    margin: 0;
    color: white;
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
  ul{
    padding: 0;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color:  black;
  }
  #app{
    overflow-x: hidden;
    min-height: 100vh;
    display:flex;
    width: 100%;
    justify-content: center;
  }
  
  /* pagination buttons */
  .selected{
    background-color: #d6d2d2;
    box-shadow: 0 0 0px black !important;
  }
  /* evolution */
  .evolutionGroup{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 700px) {
    .evolutionGroup{
      flex-direction: row;
      justify-content: space-between;
    }
  }
`
