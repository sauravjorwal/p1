import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
<Auth0Provider
    domain="dev-fd40djv6d1y40x1m.us.auth0.com"
    clientId="FDRAp36uYqh4ZTGUOsN1aY9ubu394o16"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
  )
