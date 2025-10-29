import React from 'react';

const Product = ({product, handleCardUpdate}) => {
    const {name, category, price, rating, image, description} = product;
    return (
        <div>
            <div className="card bg-base-100 shadow-sm">
                <figure>
                    <img className='w-full h-52 object-cover object-center'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name.split(" ").slice(0, 2).join(" ")}...
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-primary">{category}</div>
                        <div className="badge badge-secondary">{rating}</div>
                        <div className="badge badge-outline font-bold">$ {price}</div>
                    </div>

                    <div className='flex gap-3 w-full mt-5'>
                        <button onClick={() => handleCardUpdate(product)} className='btn btn-outline btn-success w-[50%]'>Add to Cart</button>
                        <button className='btn btn-outline btn-secondary w-[50%]'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;