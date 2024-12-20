import { useCart } from "../../hooks/useCart"


function CartItem({id, name, quantity, price}) {
    const {removeItem} = useCart()

    const handleRemove = (id) => {
        removeItem(id)
    }

  return (
    <div>
        <header>
            <h2>
                {name}
            </h2>
        </header>
        <section>
            <p>Cantidad: {quantity}</p>
            <p>Precio por unidad: {price}</p>
        </section>
        <footer>
            <p>TSubtotal: ${price * quantity}</p>
            <button onClick={() => handleRemove(id)}>Eliminar</button>
        </footer>
    </div>
  )
}

export default CartItem