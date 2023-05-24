import { useContext, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Cart from './components/cart'
import Size from './components/Sizes'
import Products from './components/Products'
import { ToogleModeContest } from './context/DarkContext/ToogleMode'
import ToogleModeButton from './components/ToogleModeButton'
import useProduct from './context/ProductContext/useProduct'
import Spinner from './components/Spinner'
import useCart from './context/CartContext/useCart'

function App() {
  const {fetshProduct} = useProduct()
  useEffect(() => {
    fetshProduct()
   }, []
   )
  const { dark } = useContext(ToogleModeContest)
  const {products ,isFetshing} = useProduct()
  return (
    <div >
      <Router>
        {isFetshing && <Spinner />}
        <Cart />
        <ToogleModeButton />
        <main className={`container-fluid container-grid ${dark ? 'light' : 'dark'}`} >
          <Size />
          <Products products={products} />
        </main>
      </Router>
    </div>
  )
}

export default App
