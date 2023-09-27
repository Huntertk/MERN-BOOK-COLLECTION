import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import backgroundImg from '../assets/backgroundImg.jpg'
import '../styles/login.scss'
import { UserContext } from '../context/UserContext'
import toast from 'react-hot-toast'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
    const {setUser, user} = useContext(UserContext)

    const handleUserLogin = async (e) => {
      e.preventDefault()
      try {
        const res = await axios.post('http://localhost:3000/api/users/login',{
                  email, password
            },{withCredentials: true})
            console.log(res.data);
            setUser(res.data)
            setRedirect(true)
            toast.success("User Login Successfully")
      } catch (error) {
        console.log("Something Went Wrong");
         toast.error("Error");
      }
    }

    if(redirect || user){
      return <Navigate to="/" />
    }
  return (
    <section className='loginMainContainer' style={{
        backgroundImage: `url(${backgroundImg})`}}>
        <div className="loginContainer">
            <form onSubmit={handleUserLogin}>
              <h1>Login</h1>
                 <input 
                type="email" 
                placeholder='your@email.com' 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <input 
                type="password" 
                placeholder='password....' 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button>Login</button>
                <p>Don't have account ? <Link to="/register">Register</Link></p>
            </form>
        </div>
    </section>
  )
}

export default Login