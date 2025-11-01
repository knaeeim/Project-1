import React from 'react';

const Cart = ({ carts }) => {
    // console.log(carts);
    return (
        <div>
            <h1>Products : {carts.length}</h1>
            <div>
                <ul>
                    {
                        carts?.map((cart) => <li key={cart.id}>{cart.name}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Cart;