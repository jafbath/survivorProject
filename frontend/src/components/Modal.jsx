import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <img id="modal-image" src="https://64.media.tumblr.com/9f614297dee4a10df5ee21c610bfe5e4/a94319b119c7e3f6-2b/s540x810/124622d554c1b376ffce37d1ef0eb0c090b12f93.pnj" alt="Survivor" />
        <h2>create your own dream team by</h2>
        <h2>adding your favorite players to the game,</h2>
        <h2>deciding who either makes the merge</h2>
        <h2>or is exiled to the edge of extinction.</h2>
        <button onClick={onClose}>GO!</button>
      </div>
    </div>
  );
};

export default Modal;