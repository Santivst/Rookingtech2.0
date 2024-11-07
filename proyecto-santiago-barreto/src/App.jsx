import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {

  return (
    <>
    <h1 style={{display:"flex", justifyContent:"center", color:"red"}}>Proyecto Rookingtech</h1>
      <NavBar/>
      <hr/>
      <ItemListContainer greeting="¡Bienvenido a la tienda de tecnología Rookingtech!"/>
    </>
  )
}

export default App
