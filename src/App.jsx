import { useState } from 'react'
import React, { useContext } from 'react';
import { Button } from 'primereact/button';
import { ModalsContext } from './components/modals/ModalProvider'; // Ajuste o caminho de importação conforme necessário
import ObraNovo from './ObraNovo'; // Ajuste o caminho de importação conforme necessário

import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const { showModal } = useContext(ModalsContext);

  const onOpenObraNovoModal = () => {
    showModal({
      component: ObraNovo,
      //size: 'modal-big-large',
      // Adicione quaisquer outras props que você precisa passar para ObraNovo aqui
    });
  };

  return (
      <div>
         <p>Teste</p>
         <Button label="Abrir ObraNovo" onClick={onOpenObraNovoModal} />
      </div>
  )
}

export default App
