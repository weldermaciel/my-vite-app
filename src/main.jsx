import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ModalProvider } from './components/modals/ModalProvider';
import ModalRoots from './components/modals/ModalRoots';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <ModalProvider>
            
            <App />
            {/* Componente rederiza modal */}
            <ModalRoots />
        </ModalProvider>

  </React.StrictMode>,
)
