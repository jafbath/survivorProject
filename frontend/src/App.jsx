import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./components/Header"
import Home from "./components/Home"

import Modal from "./components/Modal"

function App() {
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => setShowModal(false);

  return (
    <div className="App">
      <Modal show={showModal} onClose={closeModal} />
      {!showModal && (
        <>
          <Header />
          <Home />
        </>
      )}
    </div>
  );
}

export default App