import { useState } from "react";
import {useParams, useNavigate} from "react-router-dom"

const Show = (props) => {
  const params = useParams()
  const navigate = useNavigate()
  const id = params.id;
  const contestants = props.contestants;
  const contestant = contestants.find((p) => p._id === id);

  const [editForm, setEditForm] = useState(contestant);

  // handleChange function for form
  const handleChange = (event) => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateContestants(editForm, contestant._id);
    navigate("/contestants");
  };

  const removeContestant = (e) => {
    e.preventDefault()
    props.deleteContestants(contestant._id);
    navigate("/contestants");
  };

  return (
    <div className="contestant">
      <h1>{contestant.name}</h1>
      <h3>Number of Wins: {contestant.wins}</h3>
      <h3>Total Seasons Played: {contestant.totalSeasonsPlayed}</h3>
      <h3>Challenge Wins: {contestant.challengeWins}</h3>
      <h3>Votes Against: {contestant.votesAgainst}</h3>
      <h3>Days Lasted: {contestant.daysLasted}</h3>
      <h3>Quote: {contestant.quote}</h3>
      <img src={contestant.image} alt={contestant.name} />
      <button id="delete" onClick={removeContestant}>
        Delete Contestant
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={editForm.strength}
          name="strength"
          placeholder="strength"
          onChange={handleChange}
        />
        <input type="submit" value="Update Contestant" />
      </form>
    </div>
  );
}

export default Show;