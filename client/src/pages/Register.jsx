import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import backgroundImg from '../assets/backgroundImg.jpg'
import '../styles/login.scss'
import toast from 'react-hot-toast'
import { UserContext } from '../context/UserContext'

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [redirect, setRedirect] = useState(false)
        const {user} = useContext(UserContext)


    const handleRegisterUser = async (e) => {
        e.preventDefault()
        try{

            await axios.post('http://localhost:3000/api/users/register',{
                name, email, password
            },{withCredentials: true})
            toast.success("User Registered Successfully")
            setRedirect(true)
        }catch(err) {
            console.log(err);
            toast.error("Oops! User not registered")
        }

    }

    if(redirect || user){
        return <Navigate to="/login" />
    }

  return (
    <section className='loginMainContainer' style={{
        backgroundImage: `url(${backgroundImg})`}}>
        <div className="loginContainer">
            <form onSubmit={handleRegisterUser}>
              <h1>Register</h1>
                <input 
                type="text" 
                placeholder='Jhon doe' 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
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
                <button>Register</button>
                <p>Already have account ? <Link to="/login">Login</Link></p>
            </form>
        </div>
    </section>
  )
}

export default Register