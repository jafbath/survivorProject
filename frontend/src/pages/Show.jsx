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
    navigate("/");
  };

  const removeContestant = (e) => {
    e.preventDefault()
    props.deleteContestants(contestant._id);
    navigate("/");
  };

  return (
    <div className="contestant">
      <h1>{contestant.name}</h1>
      <img src={contestant.image} alt={contestant.name} />
      <button id="delete" onClick={removeContestant}>
        DELETE
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