import React from 'react';

const OutcomeModal = ({ show, onClose, outcome }) => {
  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Outcome</h2>
        <p className="winner">Winner: {outcome.winner.name}</p>
        <p className="final-three">Final 3:</p>
        <ul>
          {outcome.finalThree.map((contestant) => (
            <li key={contestant._id}>{contestant.name}</li>
          ))}
        </ul>
        <p className="jury">Jury:</p>
        <ul>
          {outcome.jury.map((contestant) => (
            <li key={contestant._id}>{contestant.name}</li>
          ))}
        </ul>
        <p className="exiled">Exiled:</p>
        <ul>
          {outcome.exiled.map((contestant) => (
            <li key={contestant._id}>{contestant.name}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default OutcomeModal;