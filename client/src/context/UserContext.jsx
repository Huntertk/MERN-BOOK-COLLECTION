import axios from "axios";
import { createContext, useEffect, useState } from "react";


const UserContext = createContext()

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [ready, setReady] = useState(false)

    useEffect(() => {
        if(!user){
            axios.get('http://localhost:3000/api/users/user',{withCredentials: true}).then((res) => {
                setUser(res.data);
                setReady(true)
            })
        }
    },[])
    return(
        <UserContext.Provider value={{user, setUser, ready}}>
            {children}
        </UserContext.Provider>
    )

}

export {UserContext, UserContextProvider}