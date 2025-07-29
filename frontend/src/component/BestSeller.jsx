import React, { useContext, useEffect, useState } from 'react'
import Title from './Title.jsx';
import { shopDataContext } from '../context/ShopContext.jsx';
import Card from './Card.jsx';

function BestSeller() {

    const {products} = useContext(shopDataContext)
    const [bestSeller, setBestSeller] = useState([])

    useEffect(() => {
        const filteredProduct = products.filter((item) => item.bestSeller)
        setBestSeller(filteredProduct.slice(0,4))
    },[products])

  return (
    <div>
      <div className="h-[8%] w-[100%] text-center md:mt-[50px] ">
        <Title text1={"BEST"} text2={"SELLER"} />
        <p className="w-[100%] m-auto text-[13px] md:text-[20px] px-[10px] text-blue-100 ">
          Tried, Tested, Loved, Discover Our All-Time Best Sellers.
        </p>
      </div>
      <div className="w-[100%] h-[50%] mt-[30px] flex items-center justify-center flex-wrap gap-[50px] ">
        {
            bestSeller.map((item, index) => (
                <Card key={index} name={item.name} id={item._id} price={item.price} image={item.image1} />
            ))
        }
      </div>
    </div>
  );
}

export default BestSeller