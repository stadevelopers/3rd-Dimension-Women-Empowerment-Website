import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Cards from './Components/Cards/Cards'
import Tour from './Components/Tour/Tour'
import Discount from './Components/Discounts/Discount'
import Review from './Components/Review/Review'
import Staff from './Components/Staff/Staff'
import Footer from './Components/Footer/Footer'
import Contact from './Components/Contact/Contact'

export const App = () => {

  return (
    <div>

      
     <Navbar/>
      <Home/>
      <Cards/>
      <Tour/>
      <Discount/>
      <Review/> 
      <Staff/> 
      <Contact/>
    
     
     <Footer/>

     
   
    </div>
  )
}

export default App