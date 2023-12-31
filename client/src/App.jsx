import React from 'react'
import {Toaster} from 'react-hot-toast'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'
import Profile from './pages/Profile'
import AddBook from './pages/AddBook'
import ProtectedRoutes from './pages/ProtectedRoutes'

const App = () => {
  return (
    <BrowserRouter>
        <Toaster />
      <Routes>
        <Route element={<Layout />}>
            <Route  path="/" element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
            
            }/>
            <Route  path="/profile" element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
            }/>
            <Route  path="/create" element={<AddBook />}/>
            <Route  path="/login" element={<Login />}/>
            <Route  path="/register" element={<Register />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App