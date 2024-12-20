import "./Cart.css"

import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart'

import CartItem from '../CartItem/CartItem'


function Cart() {
    const {cart, clearCart, getTotal, totalQuantity} = useCart()

    const total = getTotal()

    if (totalQuantity === 0) {
        return <h1 className='cart_h1'>No Hay items en el carrito</h1>
    }

    console.log(cart)


    return (
    <div className="cart_div-container">
        <div className="cart_div">
            <h1>Carrito</h1>
            {cart.map((item)=> (
                <CartItem key={item.id} {...item} />
            ))}
            <h3>Total: ${total}</h3>
            <div>
                <button onClick={clearCart}>Limpiar Carrito</button>
            </div>
            <Link className="cart_Link" to='/checkout'>Comprar</Link>
        </div>
    </div>
    )
}

export default Cart