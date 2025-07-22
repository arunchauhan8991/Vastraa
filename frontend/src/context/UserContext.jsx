
import { useContext } from 'react'
import { createContext } from 'react'
import { authDataContext } from './AuthContext.jsx'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

export const userDataContext = createContext()

function UserContext({ children }) {
    const [userData, setUserData] = useState("")
    const {serverUrl} = useContext(authDataContext)

    const getCurrentUser = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/user/getcurrentuser", { withCredentials: true})
            setUserData(result.data)
            console.log(result.data)
            

        } catch (error) {
            setUserData(null)
            console.log(error);
            
        }
    }

    useEffect(() => {
        getCurrentUser()
    }, [])

    const value = {
        userData, setUserData, getCurrentUser
    }
    

  return (
  <div>
    <userDataContext.Provider value={value}>
        {children}
    </userDataContext.Provider>
  </div>
  )
}

export default UserContext