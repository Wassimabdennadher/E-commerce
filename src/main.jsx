import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import App from './App.jsx'
import { ToogleModeProvider } from './context/DarkContext/ToogleMode.jsx';
import { ProductProvider } from './context/ProductContext/productContextProvider.jsx';
import { CartProvider } from './context/CartContext/cartContextProvider.jsx';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductProvider>
      <CartProvider>
        <ToogleModeProvider>
          <App />
        </ToogleModeProvider >
      </CartProvider>
    </ProductProvider>
  </React.StrictMode>,
)
