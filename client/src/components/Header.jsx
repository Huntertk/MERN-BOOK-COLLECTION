import React, { useContext } from 'react';
import '../styles/header.scss';
import { Link } from 'react-router-dom';
import {BiUserCircle} from 'react-icons/bi';
import { UserContext } from '../context/UserContext';
import axios from 'axios';
import toast from 'react-hot-toast';
import { BookContext } from '../context/BookContext';

const Header = () => {
  const {user, setUser} = useContext(UserContext);
  const {setBook} = useContext(BookContext);

  const handleLogout = async () => {
    try{

      await axios.get('http://localhost:3000/api/users/logout', {withCredentials: true})
      setUser(null)
      setBook(null)
      toast.success("User Logout Successfull")
    }catch(err){
      console.log(err);
      toast.error("Something Went Wrong")
    }
  }
  return (
    <div className='headerMainContainer'>
        <nav>
        <Link to="/" className='logo'>YourBooks</Link>
            <ul>
              {user ?
                <>
                <Link to="/create">Add Book</Link>
                 <Link to="/profile" className='user'><BiUserCircle /> 
                 {user?.email }</Link> 
                 <button onClick={handleLogout}>Logout</button> 
                </> 
                : 
                <>
                  <Link to="/login">Login </Link>
                  <Link to="/contact">Contact us</Link>
                </> 
              }
            </ul>
        </nav>
    </div>
  )
}

export default Header