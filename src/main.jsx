import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { IconContext } from "react-icons";

// React Router
import { BrowserRouter } from 'react-router'

// Redux
import { Provider } from 'react-redux';
import store from './lib/redux';

console.log('Main.jsx')

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <IconContext.Provider value={{ className: "hover:brightness-50" }}>
        <App />
      </IconContext.Provider>
    </BrowserRouter>
  </Provider>
)
