import { createContext, useContext, useState } from "react";
const CartContext = createContext()

const useCartContext = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('Cart must be within a provider')
    }
    return context
}

const CartProvider = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [total, setTotal] = useState(false)
    const [products, setProducts] = useState([])
    const cartContextValues = {
        isOpen,
        setIsOpen,
        total,
        setTotal,
        products,
        setProducts
    }
    return (
        <CartContext.Provider value={cartContextValues}>
            {props.children}
        </CartContext.Provider>
    )
}

export { useCartContext, CartProvider }