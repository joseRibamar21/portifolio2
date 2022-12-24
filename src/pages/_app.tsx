import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import { ParallaxProvider } from 'react-scroll-parallax'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ParallaxProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </ParallaxProvider>
    </ThemeProvider>
  )
}

export default App
