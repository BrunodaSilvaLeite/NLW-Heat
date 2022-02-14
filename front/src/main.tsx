import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '../src/App'
import { AuthProvider } from './context/auths'


import "./styles/global.scss"

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
)