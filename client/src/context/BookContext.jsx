
import  { createContext, useState } from  "react"

const BookContext = createContext()

const BookContextProvider = ({children}) => {
    const [book, setBook] = useState(null)
    

    return(
        <BookContext.Provider value={{book, setBook}}>
            {children}
        </BookContext.Provider>
    )
}

export {BookContext, BookContextProvider}
