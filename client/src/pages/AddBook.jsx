import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import backgroundImg from '../assets/backgroundImg.jpg'
import axios from 'axios'
import '../styles/addbook.scss'
import toast from 'react-hot-toast'

const AddBook = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [category, setCategory] = useState('')
  const [redirect, setRedirect] = useState(false)

  const handleAddBook = async (e) => {
    e.preventDefault()
      try{

        const res = await axios.post('http://localhost:3000/api/books/create',{title, author, category
      }, 
      {
        withCredentials: true
      })
          toast.success('Book Added Successfully')
          console.log(res);
          setRedirect(true)
    }catch(err){
        toast.error('Error')
        console.log(err);
    }
  }


  if(redirect){
    return <Navigate to="/" />
  }

  return (
    <section className='bookMainContainer' style={{
        backgroundImage: `url(${backgroundImg})`}}>
        <div className="bookContainer">
            <form onSubmit={handleAddBook}>
              <h1>Add Book</h1>
                 <input 
                type="text" 
                placeholder='enter book title' 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <input 
                type="text" 
                placeholder='enter author name' 
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                />
        <select  onChange={(e) => setCategory(e.target.value)} className="form-select">
          <option defaultValue disabled>
            Select Category
          </option>
          <option value="fiction">Fiction</option>
          <option value="non-fiction">Non-Fiction</option>
          <option value="poetry">Poetry</option>
          <option value="mystery">Mystery</option>
          <option value="biography">Biography</option>
          <option value="other">Other</option>
      </select>
                <button>Add Book</button>
            </form>
        </div>
    </section>
  )
}

export default AddBook