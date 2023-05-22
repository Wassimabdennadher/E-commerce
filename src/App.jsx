import { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Cart from './components/cart'
import Size from './components/Sizes'
import Products from './components/Products'
import axios from 'axios'
import { ToogleModeContest } from './context/DarkContext/ToogleMode'
import ToogleModeButton from './components/ToogleModeButton'

function App() {
  const [products, setProducts] = useState([])
  const { dark } = useContext(ToogleModeContest)
  useEffect(() => {
    return async () => {
      try {
        const phones = await axios.get('https://dummyjson.com/products')
        setProducts(phones.data.products)
      } catch (error) {
        console.log(error.message)
      }
    }
  }, []
  )
  return (
    <div >
      <Router>
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
