import { createContext, useState } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id) 
    }

    const addItem = (productToAdd) => {
        if (!isInCart(productToAdd.id)) {
            setCart((prev) => [...prev, productToAdd]) // En caso de que isInCart sea false, crea un nuevo array con el spread de todos los productos que ya estaban en el estado "setCart" y añade el "productToAdd" en base a su id a ese nuevo array
            console.log(`Se agregaron ${productToAdd} items al carrito`)
        } else {
            console.log("El producto ya esta en el carrito")
        }
    }    
    const removeItem = (id) => {
        const cartUpdated = cart.filter((prod) => prod.id !== id)
        setCart(cartUpdated)
    }
    const clearCart = () => {
        setCart([])
    }
    const getTotal = () => {
        let accu = 0
        cart.forEach((item) => {
            accu += item.quantity * item.price
        })
        return accu
    }
    const getTotalQuantity = () => {
        let accu = 0
        cart.forEach((product) => {
            accu += product.quantity
        })
        return accu
    }
    const totalQuantity = getTotalQuantity()


    const obj = {
        cart, // Variante que aloja el estado; un array
        isInCart, //Función. Se le pasa un id y devuelve true si algun(some) (al menos uno) producto coincide con la id. De lo cotrario, devuelve false
        addItem,
        removeItem,
        clearCart,
        getTotal,
        totalQuantity
    }
    return (
        <CartContext.Provider value={obj}>
            {children}
        </CartContext.Provider>
    )
}