import React, { useState } from 'react'

function cart() {
    const [show, setShow] = useState(false)
    

    
    return (
        <div className={`custom-cart ${show ? 'trans' : ''}`}>
            <div className='cart_container'>
                <button className={`custom_button ${!show ? 'custom-close-button' : ''}`} onClick={() => {
                    setShow(!show);
                }}  ><i class={`bi bi-${show ? 'x' : 'cart4'}`}></i></button>
                <div >
                    <span style={{color:'white'}}>Add some product here</span>
                </div>
            </div>
        </div>
    )
}
export default cart