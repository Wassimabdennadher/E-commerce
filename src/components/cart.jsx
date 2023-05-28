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
            {
                isOpen
                    ? <div className='shopnstop'> <i className="bi bi-cart4 fs-5 "></i></div>
                    : <span></span>
            }
            <div className='cart_container'>
                <button className={`custom_button ${!isOpen ? 'custom-close-button' : ''}`} onClick={() => { handleToogleIsOpen() }}  >
                    <i className={`bi bi-${isOpen ? 'x' : 'cart4'}`}></i>
                    {products.length > 0

                        ? <>
                            <svg className='notification' viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#F1C21B" d="M35.8,-55.8C49.4,-54.3,65.2,-50.5,64.7,-40.9C64.2,-31.2,47.3,-15.6,46.9,-0.2C46.5,15.1,62.6,30.3,60.1,34.7C57.5,39.1,36.4,32.7,23.3,30.2C10.2,27.6,5.1,28.9,-4.4,36.5C-14,44.2,-27.9,58.4,-34.2,57C-40.6,55.7,-39.3,38.8,-46.5,26.7C-53.6,14.6,-69.1,7.3,-68.5,0.4C-67.8,-6.6,-51,-13.1,-45.2,-27.5C-39.4,-41.9,-44.6,-64.1,-38.9,-70.1C-33.2,-76.2,-16.6,-66,-2.7,-61.3C11.2,-56.6,22.3,-57.3,35.8,-55.8Z" transform="translate(100 100)" />
                            </svg>
                            <span className='notification-number'>{products.length}</span>

                        </>

                        : <span></span>}
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
            {
                isOpen
                    ? <div className='total '>
                        <div className='d-flex' >
                            <span style={{ color: 'white' }}>Total purchased : <b>{total} Dinar(s)</b></span>
                        </div>
                    </div>
                    : <span></span>
            }
        </div >
    )
}
export default cart