import "./Checkout.css"

import { useState } from "react"
import { useCart } from "../../hooks/useCart"
import {addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import {db} from "../../services/firebase"



function Checkout() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [direccion, setDireccion] = useState("");

    const [loading, setLoading] = useState(false);
    const [orderCreated, setOrderCreated] = useState(false)
    const [orderDetails, setOrderDetail] = useState(null)

    const { cart, totalQuantity, getTotal, clearCart } = useCart()
    const total = getTotal()

    const createOrder = async () => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    firstName: nombre,
                    lastName: apellido,
                    phone: telefono,
                    addres: direccion,
                },
                items: cart,
                totalQuantity,
                total,
                date: new Date(),
            }

            const ids = cart.map((item) => String(item.id));
            const productRef = collection(db, "productos")

            const productsAddedFromFirestore = await getDocs(
                query(productRef, where(documentId(), "in", ids)))

            const { docs } = productsAddedFromFirestore

            const outOfStock = []
            const batch = writeBatch(db)

            docs.forEach((doc) => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock

                const productAddedToCart = cart.find((prod) => prod.id === doc.id)
                const prodQuantity = productAddedToCart.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })

            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, "orders")
                const orderAdded = await addDoc(orderRef, objOrder)
                console.log(`El id de su orden es: ${orderAdded.id}`)
                setOrderCreated(true)
                setOrderDetail(objOrder)
                clearCart()
            } else {
                console.log("Hay productos sin stock")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1 className="checkout_loading-h1">Se está generando la orden</h1>
    }

    if (orderCreated && orderDetails) {
      return (
        <>
              <h1 className="checkout_loading-h1">La orden fue creada exitosamente!</h1>
        <div className="checkout_summary-container">
          <div className="checkout_summary">
              <h2>Resumen de la compra:</h2>
              <p><strong>Nombre:</strong> {orderDetails.buyer.firstName} {orderDetails.buyer.lastName}</p>
              <p><strong>Teléfono:</strong> {orderDetails.buyer.phone}</p>
              <p><strong>Dirección:</strong> {orderDetails.buyer.addres}</p>
              <p><strong>Total:</strong> ${orderDetails.total}</p>
              <h3>Productos adquiridos:</h3>
              <ul>
                  {orderDetails.items.map((item) => (
                      <li key={item.id}>
                          {item.name} - Cantidad: {item.quantity} - Precio: ${item.price}
                      </li>
                  ))}
              </ul>
          </div>
        </div>
        </>
      );
  }
    
    
    return (
      <>
        <div className="checkout_form-container">
          <div className="checkout_form">
            <h2 className="checkout_h2">Formulario</h2>
            <label htmlFor="nombre">Nombre</label>
            <input onChange={(e) => setNombre(e.target.value)} value={nombre} />{" "}
            
            <label htmlFor="apellido">Apellido</label>
            <input onChange={(e) => setApellido(e.target.value)} value={apellido} />
            
            <label htmlFor="telefono">Telefono</label>
            <input onChange={(e) => setTelefono(e.target.value)} value={telefono} />
            
            <label htmlFor="direccion">Dirección</label>
            <input onChange={(e) => setDireccion(e.target.value)} value={direccion} />
          </div>
        </div>
        <div>
          {cart.map((item) => (
            <article key={item.id}>
              <header>
                <h2 className="checkout_header-h2 text-center m-5">
                  {item.name}{" "}
                  <span className="badge">Cantidad: {item.quantity}</span>
                </h2>
              </header>
            </article>
          ))}
        </div>
        <h1 className="text-center">Checkout</h1>
        <div className="d-flex justify-content-center p-3 ">
          <button className="checkout_header-h2 btn" onClick={createOrder}>
            Generar Orden
          </button>
        </div>
      </>
    );
    }

export default Checkout