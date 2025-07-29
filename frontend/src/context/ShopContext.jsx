import React, { createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext'
import axios from "axios"

export const shopDataContext = createContext()


function ShopContext({children}) {

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("")
    const [showSearch, setShowSearch] = useState(false)
    const {serverUrl} = useContext(authDataContext)
    const currency = "₹"
    const delivery_fee = 49

    const getProducts = async () => {
        try {
            const result = await axios.get(serverUrl + "/api/product/list")
            console.log(result.data);
            setProducts(result.data)
            
        } catch (error) {
            console.log(error);
            
        }
    }
    useEffect(() => {
        getProducts()
    }, [])

    const value = {
        products, currency, delivery_fee, getProducts, showSearch, setShowSearch, search, setSearch
    }

  return (
    <div>
      <shopDataContext.Provider value={value}>
        {children}
      </shopDataContext.Provider>
    </div>
  );
}

export default ShopContext