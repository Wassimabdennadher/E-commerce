import React from 'react'
import Card from './Card'
import useProduct from '../context/ProductContext/useProduct'
function Products(props) {
    const phones = props.products
    const {products} = useProduct()
  return (
    <div className={`cards-container`} >
        {
        products.map((item, index) => {
            return (
                <Card key={index} item={item}/>
            )
        })}
       
    </div>
  )
}

export default Products