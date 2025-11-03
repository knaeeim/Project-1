import React from 'react';
import { GiCrossedSabres } from 'react-icons/gi';

const CartProduct = ({ cart, handleRemoveFromCart }) => {
    const { name, image, price, cartQuantity } = cart;
    console.log(handleRemoveFromCart);
    return (
        <div className='flex gap-5 justify-between my-8'>
            {/* text */}
            <div className='text-left space-y-2'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <div>
                    BDT/$ : {price},
                    Quantity : {cartQuantity}
                </div>
            </div>

            {/* image */}
            <div className='flex gap-3'>
                <div className='w-16 h-16 rounded-xl'>
                    <img className='h-full rounded-xl' src={image} alt="" />
                </div>
                <div className='hover:bg-red-700 h-6 w-6 hover:text-white flex justify-center items-center rounded-xl'>
                    <button onClick={() => handleRemoveFromCart(cart)}><GiCrossedSabres /></button>
                </div>
            </div>
        </div>
    );
};

export default CartProduct;