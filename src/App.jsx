import { useState } from 'react'
import './App.css'
import Products from './Components/Products'
import Cart from './Components/Cart'
import Swal from 'sweetalert2'

function App() {
  const [carts, setCarts] = useState([])

  const handleRemoveFromCart = (cartP) => {
    const filteredArray = carts.filter((c) => c.id !== cartP.id)
    setCarts(filteredArray);
  }

  const handleCardUpdate = (product) => {
    setCarts((prev) => {
      const exists = prev.some(f => f.id === product.id);

      if (exists) {
        return prev.map((p) => p.id === product.id ? { ...p, cartQuantity: (p.cartQuantity || 0) + 1 } : p)
      }
      else {
        Swal.fire({
          title: `The ${product.name} has been added Succeessfully!!`,
          icon: "success",
          draggable: true
        });
        return [...prev, { ...product, cartQuantity: 1 }]
      }
    })
  }

  console.log(carts);

  return (
    <div className='flex gap-5 m-10'>
      <div className='w-[70%] border-2 p-5'>
        <Products handleCardUpdate={handleCardUpdate}></Products>
      </div>
      <div className='w-[30%] border-2 p-5'>
        <Cart carts={carts} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      </div>
    </div>
  )
}

export default App
