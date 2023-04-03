
import './App.css'
import { Card } from './components/card/card';
import { ComidaData } from './interface/ComidaData';
import { usarioComidaData } from './hooks/usuarioComidaData';
import { useState } from 'react';
import { CreateModal } from './components/card/create-modal/create-modal';


function App() {
  const { data }  = usarioComidaData();
  const [isModalOpen,setIsModalOpen]= useState (false);
  const handleOpenModal = () =>{
    setIsModalOpen(prev=>!prev)

  }
  return (
    <div className="container">
 <h1>Cardápio</h1>
    <div className="card-grid">
     {data?.map(comidaData => 
      <Card 
      preco={comidaData.preco} 
      texto={comidaData.texto} 
      imagem={comidaData.imagem}     
     />
     )} 
    
    </div>
      {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
      <button onClick={handleOpenModal}>novo</button>
    </div>
  )
}

export default App
