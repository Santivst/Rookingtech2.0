import './Home.css'

import { useEffect, useState } from 'react'

import { getProducts } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'



function Home({greeting}) {
  const [products, setProducts] = useState([])

  useEffect(()=> {
    getProducts()
    .then((data)=>{
      setProducts(data)
    });
  })


  return (
    <>
        <h2 className="home-h2">{greeting}</h2>
        <ItemList products={products}></ItemList>
    </>
  )
}

export default Home