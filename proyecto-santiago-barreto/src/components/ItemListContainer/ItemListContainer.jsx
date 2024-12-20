import './ItemListContainer.css'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import ItemList from '../ItemList/ItemList'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../services/firebase'


function ItemListContainer({greeting}) {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(()=>{
        const collectionRef = categoryId 
        ? query(collection(db, "productos"), where("category", "==", categoryId))
        : collection(db, "productos")

        getDocs(collectionRef)
        .then((querySnapshot)=>{
            const productos = []
            querySnapshot.forEach((doc)=>{
                productos.push({id: doc.id, ...doc.data()})
            })
            setProducts(productos)
        })
        .catch((err)=>{
            console.log(err)
        })

    }, [categoryId])

    return (
        <>
            <h2 className="itemListContainer-h2">{greeting}</h2>
            <ItemList products={products}></ItemList>
        </>
    )
}


export default ItemListContainer