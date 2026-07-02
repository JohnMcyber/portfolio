import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/tokens.css'
import './styles/global.css'
import './styles/components.css'

// HashRouter (not BrowserRouter) because GitHub Pages serves static files
// only — a BrowserRouter deep link like /projects/slug would 404 on
// refresh. HashRouter keeps the route in the URL fragment instead
// (e.g. /#/projects/slug), which never hits the server. See Section 1.1.
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
