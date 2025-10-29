import React from 'react';

const Cart = ({carts}) => {
    console.log(carts);
    return (
        <div>
            <h1>Here are your added Products</h1>
            <div>
                {
                    carts.map((cart) => <ul className='p-5'><li>{cart.name}</li></ul>)
                }
            </div>
        </div>
    );
};

export default Cart;