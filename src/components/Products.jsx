import React, { useEffect } from 'react'
import Card from './Card'
import useProduct from '../context/ProductContext/useProduct'
function Products() {
  const { products, flterProducts, filters } = useProduct()
  useEffect(() => {
    flterProducts(filters)
  }, [filters])
  return (
    <div className='container-fluid p-2 mt-5' >
      <div className='row g-2'>
        {
          products.map((item, index) => {
            return (
              <Card key={index} item={item} />
            )
          })}

      </div>
    </div>
  )
}

export default Products