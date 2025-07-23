import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext'
import axios from 'axios'

export const adminDataContext = createContext()

function AdminContext({children}) {

    const [adminData, setAdminData] = useState(null)
    const {serverUrl} = useContext(authDataContext)

    const getAdmin = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/user/getadmin", {withCredentials: true})
            console.log(result.data);
            setAdminData(result.data)
        } catch (error) {
            setAdminData(null)
            console.log(error);
            
        }
    }

    useEffect(() => {
        getAdmin()
    },[])

    const value = {
        getAdmin, adminData, setAdminData
    }

  return (
    <div>
        <adminDataContext.Provider value={value}>
            {children}
        </adminDataContext.Provider>
    </div>
  )
}

export default AdminContext