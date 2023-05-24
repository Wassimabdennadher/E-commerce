import axios from 'axios'
import { useProductContext } from './productContextProvider'
let items = []
function useProduct() {
    const {
        isFetshing,
        setIsFetshing,
        products,
        setProducts,
        filters,
        setFilters
    } = useProductContext()

    const fetshProduct = async () => {
                try {
                    setIsFetshing(true)
                    const response = await axios.get('https://dummyjson.com/products')
                    setIsFetshing(false)
                    setProducts(response.data.products)
                    items = response.data.products
                } catch (error) {
                    console.log(error.message)
                }
            }

    const flterProducts = () => {
        setIsFetshing(true)
        const filteredProduct = items.filter(item => item.title.toLowerCase().includes(filters.toLowerCase()))
        setProducts(filteredProduct)
        setIsFetshing(false)
    }
    
    return({
        isFetshing,
        products,
        fetshProduct,
        flterProducts,
        filters,
        setFilters  
    }
)
}

export default useProduct