import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = ({ handleCardUpdate }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, [])

    // console.log(products);

    return (
        <div className='grid grid-cols-3 gap-x-5 gap-y-10 justify-items-center my-10'>
            {
                products.map((product) => <Product key={product.id} handleCardUpdate={handleCardUpdate} product={product}></Product>)
            }
        </div>
    );
};

export default Products;