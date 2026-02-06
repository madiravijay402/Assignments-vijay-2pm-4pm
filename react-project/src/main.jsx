
import { createRoot } from 'react-dom/client'
import{store} from "../src/app/store.js"
import './index.css'
import App from './App.jsx'
import{Provider} from "react-redux"
import { StrictMode } from 'react'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
       <App />
    </Provider>
  </StrictMode>
)
