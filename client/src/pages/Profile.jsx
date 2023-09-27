import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'

const Profile = () => {
    const {user, ready} = useContext(UserContext)
  return (
    <div>
        <h3>User ID : {user?._id}</h3>
        <h3>User Email : {user?.email}</h3>
        <h3>User Name : {user?.name}</h3>
    </div>
  )
}

export default Profile