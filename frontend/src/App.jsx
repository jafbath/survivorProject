import { useState } from 'react'
import './App.css'
import Header from "./components/Header"
import Home from "./components/Home"

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Home />
//     </div>
//   )
// }

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