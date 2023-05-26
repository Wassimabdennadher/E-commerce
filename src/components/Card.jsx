import React from 'react'
import useCart from '../context/CartContext/useCart'

function Card(props) {
    const product = props.item
    const { addProduct } = useCart()
    return (
        <div className='col'>
            <div className='card card-size'>
                <img src={product.thumbnail} className="card-img-top image-size" alt="..." />
                <div className="card-body">
                    <h5 className="card-title cut-text">{product.title}</h5>
                    <p className="card-text cut-text" >{product.description}</p>
                    <p className="card-text">{`${product.price} Dinar(s)`}</p>
                    <a className="btn add-to-cart-button align-self-end" onClick={() => addProduct(product)}>Add to cart</a>
                </div>
            </div>
        </div>
    )
}

export default Card