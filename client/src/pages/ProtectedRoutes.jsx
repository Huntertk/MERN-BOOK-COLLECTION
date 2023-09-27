import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    const {user} = useContext(UserContext)

    if(!user){
        return <Navigate to="/login" />
    }
  return (
    <>
        {children}
    </>
  )
}

export default ProtectedRoutes