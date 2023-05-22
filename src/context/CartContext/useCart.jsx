import useCartProduct from "./useCartProduct";
import { useCartContext } from "./cartContextProvider";


function useCart() {
  const { 
    addProduct,
    decerementQuantity,
    incerementQuantity,
    products,
    removeProduct } = useCartProduct()
    const {isOpen , setIsOpen} = useCartContext()
    const openCard = () => {setIsOpen(true)}
    const closeCard = () => {setIsOpen(false)}
  return (
    {
      addProduct,
      decerementQuantity,
      incerementQuantity,
      products, 
      removeProduct,
      isOpen,
      setIsOpen,
      openCard,
      closeCard
    }
  )
}

export default useCart