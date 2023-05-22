import { useContext } from "react"
import { useCartContext } from "./cartContextProvider"

function useCartProduct() {
    const { products, setProducts } = useContext(useCartContext)
    const updateProductSafely = (currentProduct, targetProduct, quantity) => {
        if (currentProduct.id === targetProduct.id) {
            return Object.assign({ ...currentProduct, quantity: currentProduct.quantity + quantity })
        } else {
            return currentProduct
        }
    }
    const incerementQuantity = (productToIncrease) => {
        const updatedProduct = products.map(product => {
            return updateProductSafely(product, productToIncrease, 1)
        })
        setProducts(updatedProduct)

    }
    const decerementQuantity = (productToDecrease) => {
        const updatedProduct = products.map(product => {
            return updateProductSafely(product, productToDecrease , -1)
        })
        setProducts(updatedProduct)
    }

    const addProduct = (productToAdd) => {
        let updatedProduct;
        const findProduct = products.find(product => product.id === productToAdd.id)
        if (!findProduct) {
            return updatedProduct = [...products, productToAdd]
        } else {
            updatedProduct = products.map(product => {
                return updateProductSafely(product, productToAdd, productToAdd.quantity)
            })
            setProducts(updatedProduct)
        }
    }

    const removeProduct = (productToRemove) => {
        let updatedProduct
        const findProduct = products.find(product => product.id === productToRemove.id)
        if (findProduct) {
            return updatedProduct = products.filter(product => product.id !== productToRemove.id)
        }
        setProducts(updatedProduct)

    }


    return( {
            incerementQuantity,
            decerementQuantity,
            addProduct,
            removeProduct,
            products
    })
}





export default useCartProduct