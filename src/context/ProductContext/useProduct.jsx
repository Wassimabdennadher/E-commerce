import React from 'react'
import { useProductContext } from './productContextProvider'

function useProduct() {
    const {
        isFetshing,
        setIsFetshing,
        products,
        setProducts,
        filters,
        setFilters
    } = useProductContext()

    const fetshProduct = () => {
        useEffect(() => {
            return async () => {
                try {
                    setIsLoading(true)
                    const phones = await axios.get('https://dummyjson.com/products')
                    setIsLoading(false)
                    setProducts(phones.data.products)
                } catch (error) {
                    console.log(error.message)
                }
            }
        }, []
        )
    }
    const flterProducts = () => {
        setIsLoading(true)
        const filteredProduct = products.filter(item => item.title.toLowerCase().includes(filters.toLowerCase()))
        setProducts(filteredProduct)
        setIsLoading(false)
    }
    
    return({
        isFetshing,
        products,
        fetshProduct,
        flterProducts,
        filters  
    }
)
}

export default useProduct