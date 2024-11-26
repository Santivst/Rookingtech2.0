import './ItemList.css'

import Item from "../Item/Item"

function ItemList({products}) {
  return (
    <div className="container ItemList-container">
        {products.map(product => <Item key={product.id} product={product} />)}
    </div>
  )
}

export default ItemList