import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/app.scss' 
import { UserContextProvider } from './context/UserContext.jsx'
import { BookContextProvider } from './context/BookContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <BookContextProvider>
        <App />
      </BookContextProvider>
    </UserContextProvider>
  </React.StrictMode>,
)
