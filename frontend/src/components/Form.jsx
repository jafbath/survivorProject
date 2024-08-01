import { useState } from "react";

const Form = (props) => {
  const [newForm, setNewForm] = useState({
    name: "",
    wins: 0,
    totalSeasonsPlayed: 0,
    image: "",
    challengeWins: 0,
    votesAgainst: 0,
    daysLasted: 0,
    strength: "",
    quote: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewForm((prevForm) => ({
      ...prevForm,
      [name]: [
        "wins",
        "totalSeasonsPlayed",
        "challengeWins",
        "votesAgainst",
        "daysLasted",
      ].includes(name)
        ? Number(value)
        : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.createContestants(newForm);
    setNewForm({
      name: "",
      wins: 0,
      totalSeasonsPlayed: 0,
      image: "",
      challengeWins: 0,
      votesAgainst: 0,
      daysLasted: 0,
      strength: "",
      quote: "",
    });
  };
  return (
    <div>
      <h1 className="form-header">Add a new player here:</h1>
      <form onSubmit={handleSubmit} className="add-player-form">
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        Wins:
        <input
          type="number"
          value={newForm.wins}
          name="wins"
          placeholder="wins"
          onChange={handleChange}
        />
        Seasons played:
        <input
          type="number"
          value={newForm.totalSeasonsPlayed}
          name="totalSeasonsPlayed"
          placeholder="seasons"
          onChange={handleChange}
        />
        Challenge Wins:
        <input
          type="number"
          value={newForm.challengeWins}
          name="challengeWins"
          placeholder="challenge wins"
          onChange={handleChange}
        />
        Votes Against:
        <input
          type="number"
          value={newForm.votesAgainst}
          name="votesAgainst"
          placeholder="votes against"
          onChange={handleChange}
        />
        Days Lasted
        <input
          type="number"
          value={newForm.daysLasted}
          name="daysLasted"
          placeholder="Days Lasted"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.strength}
          name="strength"
          placeholder="Strength(s)"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.quote}
          name="quote"
          placeholder="Memorable Quote"
          onChange={handleChange}
        />
        <input
          type="submit"
          value="Create Contestant"
          className="button-text"
        />
      </form>
    </div>
  );
};

export default Form;
