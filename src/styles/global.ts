import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;

    h1{
      font-size: 50px;
      font-weight: 900;
    }
  }

  @media (max-width: 1080px) {
    html{
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
      html{
          font-size: 87.5%;
      }
  }

  body{
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,700&display=swap');
    background: #000610;
    color: #fff;
  }

  body, input, textarea, select, button{
      font: 400 1rem sans-serif;
  }

  button{
      cursor: pointer;
  }

  a{
      text-decoration: none;
      color: inherit
  }

`
