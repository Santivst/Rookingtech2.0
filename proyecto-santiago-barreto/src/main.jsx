import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'


//import AdminPanel from './components/AdminPanel/AdminPanel.jsx'
/*
! ESTE COMPONENTE QUEDA COMENTADO PUES PUEDE SER USADO MÁS ADELANTE
! PARA SUBIR PRODUCTOS DESDE EL ASYNCMOCK EN VEZ DE FIREBASE
*/


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
