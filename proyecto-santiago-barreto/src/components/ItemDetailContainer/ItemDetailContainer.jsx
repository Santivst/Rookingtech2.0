import './ItemDetailContainer.css'

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getProductsById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"


function ItemDetailContainer({greeting}) {
  const [product, serProduct]= useState({})
  const {productId} = useParams()

  useEffect(()=>{
    const numericProductId = parseInt(productId, 10);
    getProductsById(numericProductId)
    .then((resp) => serProduct(resp))
  }, [productId])

  return (
    <div className='itemDetailContainer-div'>
      <h2 className="itemDetailContainer-h2">{greeting}</h2>
      <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer