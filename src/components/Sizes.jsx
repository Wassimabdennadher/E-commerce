import React from 'react'

function Size() {
    const types = ['Iphone', 'OPPO', 'SAMSUNG', 'Xiaome', 'GOOGLE', 'Infinix', 'Motorella']
    return (
        <div className='d-inline'>
        <div className='sizes-container'>
            <div className='phone-style'>Last search(s) :</div>
            {types.map((item, index) => {
                return (
                    <button key={index} className='size-button'>{item}</button>
                )
            })}
        </div>
        </div>
    )
}

export default Size