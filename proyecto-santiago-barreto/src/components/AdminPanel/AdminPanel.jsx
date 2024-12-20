import React from 'react'
import uploadProducts from '../../hooks/uploadProducts'

/*
* COMPONENTE TEMPORAL QUE REEMPLAZA A <APP /> EN MAIN.JSX PARA EJECUTAR
* LA SUBIDA DE PRODUCTOS DESDE EL ASYNCMOCK HACIA FIREBASE. UTILIZA EL 
* CUSTOM HOOK "uploadProducts" PARA CUMPLIR ESTA FUNCIÓN
*/



const AdminPanel = () => {
    const handleUpload = () => {
        uploadProducts()
    }

    return (
        <div>
            <h1>Panel de administración</h1>
            <button onClick={handleUpload}>Subir Productos</button>
        </div>
    )
}

export default AdminPanel