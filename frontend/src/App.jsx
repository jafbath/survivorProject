import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(true);
  const navigate = useNavigate();

  const closeModal = () => {
    setShowModal(false);
    navigate("/contestants");
  };
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

export default App;
