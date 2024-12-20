import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import products from "../asyncMock";

/*
* CUSTOM HOOK DISEÑADO PARA EJECUTARSE UNA VEZ EN SINCRONÍA 
* CON EL COMPONENTE "AdminPanel" PARA ASÍ SUBIR LOS PRODUCTOS
* DEL ASYNCMOCK A FIREBASE
*/




const uploadProducts = async () => {
    const collectionRef = collection(db, "productos");
  
    try {
      for (const product of products) {
        const docRef = await addDoc(collectionRef, product);
        console.log(`Producto añadido: ${docRef.id}`);
      }
      console.log("Todos los productos se subieron correctamente.");
    } catch (error) {
      console.error("Error al subir los productos:", error);
    }
  };
  
  export default uploadProducts;