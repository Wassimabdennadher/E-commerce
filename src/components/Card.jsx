import React from 'react'

function Card(props) {
    const phone = props.item
    console.log(phone)
    return (
        <div className='card card-size' style={{width : '18rem'}}>
            <img src={phone.thumbnail} className="card-img-top image-size" alt="..." />
                <div className="card-body card-body-flex">
                    <h5 className="card-title">{phone.title}</h5>
                    <p className="card-text" style={{height:'50px', overflowY:'scroll'}}>{phone.description}</p>
                    <p className="card-text">{`${phone.price} Dinar(s)`}</p>
                    <a href="#" className="btn add-to-cart-button align-self-end" >Add to cart</a>
                </div>
        </div>
    )
}

export default Card