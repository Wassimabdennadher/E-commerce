import React, { useState } from 'react'
import useCart from '../context/CartContext/useCart'
import CartProduct from './CartProduct'

function cart() {
    const { isOpen, closeCard, openCard, products } = useCart()

    const handleToogleIsOpen = () => {
        isOpen ? closeCard() : openCard()
    }

    return (
        <div className={`custom-cart  ${isOpen ? 'trans' : ''}`} >
            <div className='cart_container'>
                <button className={`custom_button ${!isOpen ? 'custom-close-button' : ''}`} onClick={() => { handleToogleIsOpen() }}  >
                    <i class={`bi bi-${isOpen ? 'x' : 'cart4'}`}></i>
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
            <div className='total'>
                <span style={{ color: 'white' }}>Total : </span>
            </div>
        </div>
    )
}
export default cart