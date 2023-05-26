import React, { useMemo, useState } from 'react'
import useCart from '../context/CartContext/useCart'
import CartProduct from './CartProduct'

function cart() {
    const { isOpen, closeCard, openCard, products } = useCart()
    const handleToogleIsOpen = () => {
        isOpen ? closeCard() : openCard()
    }
    const total = useMemo(() => {
        let sumNumber = 0
        products.map(product => {
            sumNumber = sumNumber + (product.price * (product.quantity + 1))
        })
        return sumNumber
    }, [products])
    return (
        <div className={`custom-cart  ${isOpen ? 'trans' : ''}`} >
            <div className='shopnstop'>
                <i className="bi bi-cart4 fs-5 "></i>
            </div>
            <div className='cart_container'>
                <button className={`custom_button ${!isOpen ? 'custom-close-button' : ''}`} onClick={() => { handleToogleIsOpen() }}  >
                    <i className={`bi bi-${isOpen ? 'x' : 'cart4'}`}></i>
                </button>
                <div className='custom-products-cart' >
                    {isOpen && products.length === 0 ? <span style={{ color: 'white' }}>Add some products here</span> : <span></span>}
                    {isOpen && products ? products.map((product, index) => {
                        return (
                            <CartProduct key={index} product={product} />
                        )
                    }) : <span></span>}

                </div>
            </div>
            <div className='total '>
                <div className='d-flex' >
                    <span style={{ color: 'white' }}>Total purchased : <b>{total} Dinar(s)</b></span>
                </div>
            </div>
        </div>
    )
}
export default cart