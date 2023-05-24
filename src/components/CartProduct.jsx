import React from 'react'

function CartProduct(props) {
    const product = props.product
    return (
        <div className="card mb-3 special-cart-product">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product.thumbnail} style={{overflow:'hidden'}} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h6 className="card-title">{product.title}</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartProduct