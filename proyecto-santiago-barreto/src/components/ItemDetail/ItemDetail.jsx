import './ItemDetail.css'

import { Link } from "react-router-dom"


function ItemDetail({name, image, description, category, price, stock}) {
  
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
            <Link className='itemDetail-link' to="/cart" >Finalizar compra</Link>
        </div>
    </div>
  )
}


export default ItemDetail