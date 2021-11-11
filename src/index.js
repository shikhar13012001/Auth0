import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN||"dev-dpsnq1l4.us.auth0.com";
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID||"Mgep1MdAyXZWmGrohQwcBPKiCKXpnpJ9";
console.log(domain,clientId);
ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);