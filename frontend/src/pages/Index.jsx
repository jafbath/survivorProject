import { useState } from "react";
import { Link } from "react-router-dom";
import OutcomeModal from "./OutcomeModal";
import { useNavigate } from "react-router-dom";


function Index(props) {
  const [showModal, setShowModal] = useState(false);
  const [outcome, setOutcome] = useState(null);
 const navigate = useNavigate();
 

  const handleOutcome = () => {
    const contestants = props.contestants.filter(
      (contestant) => !contestant.exiled
    );
    const finalThree = contestants.sort(() => 0.5 - Math.random()).slice(0, 3);
    const winner = finalThree[Math.floor(Math.random() * finalThree.length)];
    const jury = contestants.filter(
      (contestant) => contestant !== winner && !finalThree.includes(contestant)
    );
    const exiled = props.contestants.filter((contestant) => contestant.exiled);

    setOutcome({ winner, finalThree, jury, exiled });
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const loaded = () => {
    console.log(props.contestants);
    return (
      <div className="grid-container">
        {props.contestants.map((contestant) => (
          <div key={contestant._id} className="contestant">
            <Link to={`/contestant/${contestant._id}`}>
              <div className="image-container">
                <img src={contestant.image} alt={contestant.name} />
                {contestant.merged && <div className="overlay">Merged</div>}
              </div>
              <h1 className="contestant-name">{contestant.name}</h1>
            </Link>
          </div>
        ))}
      </div>
    );
  };

  const loading = () => {};

  return (
    <div className="header-container">
      <img
        src="https://64.media.tumblr.com/66b98a29f5298e8e2836eb46d3c2d5fc/2163af1d83ec4ac2-41/s540x810/80f9623b2e1940ecddd28126687a9fd4b36be543.pnj"
        alt="Survivor"
        className="title-image"
      />
      {props.contestants ? loaded() : loading()}

      <button className="generate-outcome-button" onClick={handleOutcome}>
        Generate an Outcome
      </button>
      <OutcomeModal show={showModal} onClose={closeModal} outcome={outcome} />
      <Link to="/newcontestant"><button className="generate-outcome-button">
        New Contestant
      </button></Link>
    </div>
  );
}

export default Index;
