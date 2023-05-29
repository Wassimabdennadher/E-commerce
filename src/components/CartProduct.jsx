import React from 'react'
import useCart from '../context/CartContext/useCart'

function CartProduct(props) {
    const product = props.product
    const { removeProduct, decerementQuantity, incerementQuantity } = useCart()
    return (
        <div className="special-cart-product ">
            <div className='image-container-cart'>
                <img src={product.thumbnail} className="img-fluid rounded-start" style={{ width: '100%', height: '100%' }} alt="..." />
            </div>
            <div className="d-flex flex-column justify-content-center  align-items-around p-2">
                <h6 className="cut-text">{product.title}</h6>
                <div className='d-flex justify-content-between'>
                    <h6>{`Quantity Added : ${product.quantity + 1}`} </h6>
                
                        <i className={`bi bi-dash-circle`} onClick={() => { if (product.quantity >= 1) { decerementQuantity(product) } }}></i>
                        <i className="bi bi-plus-circle" onClick={() => incerementQuantity(product)}></i>
                  
                </div>
                <h6 className="card-title">{`${product.price * (product.quantity + 1)} Dinar(s)`}</h6>
            </div>
            <i className="bi bi-x fs-3"style={{color:'red'}} onClick={() => removeProduct(product)} ></i>
        </div>
    )
}

export default CartProduct