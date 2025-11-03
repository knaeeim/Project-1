import React, { useEffect, useState } from 'react';
import CartProduct from './CartProduct';

const Cart = ({ carts, handleRemoveFromCart }) => {
    
    const [totalPrice, setTotalPrice] = useState(0); 

    useEffect(() => {
        const tPrice = carts.reduce((acc, curr) => {
            return acc += curr.price * curr.cartQuantity; 
        }, 0)
        setTotalPrice(tPrice)
    }, [carts])

    return (
        <div>
            <h1>Products : {carts.length}</h1>
            <div>
                <ul>
                    {
                        carts?.map((cart) => <CartProduct key={cart.id} cart={cart} handleRemoveFromCart={handleRemoveFromCart}> </CartProduct>)
                    }
                    <hr />
                    <div className='flex justify-between'>
                        <p></p>
                        <p className='font-bold text-4xl'>Total : </p>
                        <p className='font-bold text-4xl'>{totalPrice}</p>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Cart;