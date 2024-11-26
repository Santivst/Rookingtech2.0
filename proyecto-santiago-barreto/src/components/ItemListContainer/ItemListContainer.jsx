import './ItemListContainer.css'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { getProducts, getProductsByCategory } from '../../asyncMock'
import ItemList from '../ItemList/ItemList'

function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        if (categoryId) {
            getProductsByCategory(categoryId)
            .then((data) => {
                setProducts(data)
            });
        } else {
            getProducts()
            .then((data)=>{
                setProducts(data)
            });
        }
    }, [categoryId])

    console.log(products)

    return (
        <>
            <h2 className="itemListContainer-h2">{greeting}</h2>
            <ItemList products={products}></ItemList>
        </>
    )
}


export default ItemListContainer

