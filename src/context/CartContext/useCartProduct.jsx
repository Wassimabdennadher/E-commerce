import { useCartContext } from "./cartContextProvider"

function useCartProduct() {
    const { products, setProducts } = useCartContext()
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
            return updateProductSafely(product, productToDecrease, -1)
        })
        setProducts(updatedProduct)
    }

    const addProduct = (productToAdd) => {
        let updatedProduct;
        const findProduct = products.find(product => product.id === productToAdd.id)
        if (!findProduct) {
            updatedProduct = [...products, { ...productToAdd, quantity: 0 }]
            return setProducts(updatedProduct)
        } else {
            return alert('Product already exists')
        }
    }

    const removeProduct = (productToRemove) => {
        let updatedProduct
        const findProduct = products.find(product => product.id === productToRemove.id)
        if (findProduct) {
            updatedProduct = products.filter(product => product.id !== productToRemove.id)
            return  setProducts(updatedProduct)
        }
    }


    return ({
        incerementQuantity,
        decerementQuantity,
        addProduct,
        removeProduct,
        products
    })
}





export default useCartProduct