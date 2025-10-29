import { useState } from 'react'
import './App.css'
import Products from './Components/Products'
import Cart from './Components/Cart'

function App() {
  const [carts, setCarts]  = useState([])
  
  const handleCardUpdate = (product) => {
      setCarts(prev => [...prev, product])
  }

  console.log(carts);

  return (
    <div className='flex gap-5'>
      <div className='w-[70%] border-2'>
        <Products handleCardUpdate={handleCardUpdate}></Products>
      </div>
      <div className='w-[30%] border-2'>
        <Cart carts={carts}></Cart>
      </div>
    </div>
  )
}

export default App
