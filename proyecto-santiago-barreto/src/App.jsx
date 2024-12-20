import './App.css'

import { BrowserRouter, Route, Routes } from "react-router-dom"

import NavBar from "./components/NavBar/NavBar"
import Home from "./components/Home/Home"
import AbouUsContainer from "./components/AboutUsContainer/AboutUsContainer"
import Contact from "./components/Contact/Contact"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import { CartProvider } from './Context/CartContext'


function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <h1 style={{display:"flex", justifyContent:"center", color:"red"}}>Proyecto Rookingtech</h1>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home greeting="¡Bienvenido a la tienda de tecnología Rookingtech!" />}/>
          <Route path="/category/:categoryId" element={<ItemListContainer greeting="¡Ve las categorías para que encuentras tus productos deseados más rapido!" />}/>
          <Route path="/detail/:productId" element={<ItemDetailContainer greeting="¡Averigua más sobre el producto!"/>}/>
          <Route path="/about-us" element={<AbouUsContainer greeting="Descubre más acerca del proyecto Rookingtech" />}/>
          <Route path="/contact" element={<Contact greeting="¡Contáctanos!" />}/>
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1 style={{display: "flex", justifyContent: "center", margin: "20px 0 0 0" }}>Página no encontrada</h1>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App