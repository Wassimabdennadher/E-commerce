import React from 'react'
import useCart from '../context/CartContext/useCart'

function CartProduct(props) {
    const product = props.product
    const { removeProduct,decerementQuantity,incerementQuantity } = useCart()
    return (
        <div className="card special-cart-product">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product.thumbnail} style={{ overflow: 'hidden' }} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h6 className="card-title">{product.title}</h6>
                        <div className='d-flex justify-content-center align-items-around gap-2'>
                            <h6 className="card-title">{`Quantity Added : ${product.quantity + 1}`} </h6>
                                <i className="bi bi-dash-circle" onClick={() => {if (product.quantity >= 1){decerementQuantity(product)}}}></i>
                                <i className="bi bi-plus-circle" onClick={() => incerementQuantity(product)}></i>          
                        </div>
                        <h6 className="card-title">{`${product.price * (product.quantity + 1)} Dinar(s)`}</h6>
                    </div>
                </div>
            </div>
            <i className="bi bi-x fs-3" onClick={() => removeProduct(product)} ></i>
        </div>
    )
}

export default CartProduct