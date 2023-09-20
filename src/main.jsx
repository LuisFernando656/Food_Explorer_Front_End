import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './hooks/auth'
import { SearchProvider } from './hooks/search'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'
import theme from './styles/theme'
import { Routes } from './routes'

import { register } from 'swiper/element/bundle'
register()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AuthProvider>
        <SearchProvider>
          <Routes/>
        </SearchProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)