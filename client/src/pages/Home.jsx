import { useContext, useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import { BookContext } from '../context/BookContext'
import axios from 'axios';
import { UserContext } from '../context/UserContext';

const Home = () => {
  const {book, setBook} = useContext(BookContext)
  const {user} = useContext(UserContext)
  console.log(user);
  useEffect(() => {
        axios.get('http://localhost:3000/api/books',{withCredentials: true}).then((res) => setBook(res.data.books)).catch((err) => console.log(err))
        
    },[user])

    // if(!user){
    //   return <Navigate to="/login" />
    // }
  return (
    <section className='homeMainContainer'>
      {book?.map((item) => {
        return <div key={item._id}>
          <h3>Title : {item.title}</h3>
          <h4>Category : {item.category}</h4>
          <p>By : {item.author}</p>
        </div>

      })}
    </section>
  )
}

export default Home