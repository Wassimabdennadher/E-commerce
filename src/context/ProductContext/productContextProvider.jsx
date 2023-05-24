import { createContext, useContext, useState } from "react";

const ProductContext = createContext()
const useProductContext = () => {

    const context = useContext(ProductContext)
    if (!context) {
        throw new Error('Context must be within a provider')
    }
    return context
}

const ProductProvider = (props) => {
    const [isFetshing, setIsFetshing] = useState(false)
    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState()
    const productContextValue = {
        isFetshing,
        setIsFetshing,
        products,
        setProducts,
        filters,
        setFilters
    }
    return (
        <ProductContext.Provider value={productContextValue}>
            {props.children}
        </ProductContext.Provider >
    )
}
export {useProductContext, ProductProvider}