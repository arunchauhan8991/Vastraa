import React, { useEffect, useState } from 'react'
import Background from '../component/Background.jsx';
import Hero from '../component/Hero.jsx';
import Product from './Product.jsx';
import OurPolicy from '../component/OurPolicy.jsx';
import ContactForm from '../component/ContactForm.jsx';
import Footer from '../component/Footer.jsx';

function Home() {
  let heroData = [
    { text1: "30% OFF Limited Offer", text2: "Style that" },
    { text1: "Discover the Best of Bold Fashion", text2: "Limited Time Only!" },
    { text1: "Explore Our Best Collection", text2: "Shop Now!" },
    { text1: "Choose your Perfect Fashion Fit", text:"Now on Sale!"}
  ];

  let [heroCount, setHeroCount] = useState(0)

  useEffect(() => {
    let interval = setInterval(() => {
      setHeroCount(prevCount => (prevCount === 3 ? 0: prevCount + 1))
    },3500)
    return () => clearInterval(interval)
  },[])


  return (
    <div className="overflow-x-hidden relative top-[55px]">
      <div className="w-[100vw] lg:h-[100vh] md:h-[50vh] sm:h-[30vh] bg-gradient-to-l from-[#141414] to-[#0c2025]">
        <Background heroCount={heroCount} />
        <Hero
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          heroData={heroData[heroCount]}
        />
      </div>
      <Product/>
      <OurPolicy />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Home