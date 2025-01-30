import { createRoot } from 'react-dom/client'
import './styles/styles.css'
import App from './App.jsx'
import AppProvider from './AppContext.jsx'

createRoot(document.getElementById('root')).render(
  <AppProvider>
  <App />
  </AppProvider>
)
