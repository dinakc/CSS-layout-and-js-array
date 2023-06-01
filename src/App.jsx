import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const icecream = ["Chocolate","Strawberry","Banana", "Mango", "Matcha"];
  
  let listing_array =[]
  for(let i = 0; i < icecream.length; i++ )
  {
    listing_array[i] = <button>{icecream[i]}</button>
  }
 
  console.log(listing_array)

  return (
    <>
    
     <div className='header'>Icecream World!!! </div>
     <div className='parag'> 24 hrs open icecream shop with variety or vegan and non-dairy options for when you want something sweet </div>
     <div className='option'> FLAVOURS</div>
     <div className='lists'> {listing_array} </div>
    </>
  )
}

export default App
