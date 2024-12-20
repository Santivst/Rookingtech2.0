import './ItemDetail.css'

import { Link } from "react-router-dom"
import { useCart } from '../../hooks/useCart'
import ItemCount from "../ItemCount/ItemCount"


function ItemDetail({id, name, image, description, category, price, stock}) {
  const {addItem, isInCart} = useCart()

  const handleAdd = (count) => {
    const productToAdd = {
      id, name, price, quantity: count
    }
    addItem(productToAdd)
  }
  
  return (
    <div className="container itemDetail-container">
        <h2>{name}</h2>
        <div className="card itemDetail-card">
            <img 
                src={image}
                style={{width: 300}}
                className="card-img-top"
                alt={name}
            />

            <div className="card-body">
                <p>{description}</p>
                <p> <strong>Categoría:</strong> {category}</p>
                <p> <strong>Precio: </strong>$ {price}</p>
                <p> <strong>Cantidad disponible:</strong> {stock}</p>
            </div>

            {
              isInCart(id) ? (
                <Link className='itemDetail-link' to="/cart" >Finalizar compra</Link>
              ) : (
                <ItemCount stock={stock} onAdd={handleAdd} />
              )
            }
        </div>
    </div>
  )
}


export default ItemDetail