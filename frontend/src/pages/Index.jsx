import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
    const [newForm, setNewForm] = useState({
        name: "",
        wins: 0,
        totalSeasonsPlayed: 0,
        image: "",
        challengeWins: 0,
        votesAgainst: 0,
        daysLasted: 0,
        strength: "",
        quote: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewForm((prevForm) => ({
            ...prevForm,
            [name]: ["wins", "totalSeasonsPlayed", "challengeWins", "votesAgainst", "daysLasted"].includes(name)
                ? Number(value)
                : value
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
            quote: ""
        });
    };

    const loaded = () => {
        return (
            <div className="grid-container">
                {props.contestants.map((contestant) => (
                    <div key={contestant._id} className="contestant">
                        <Link to={`/contestant/${contestant._id}`}>
                            <h1 className="contestant-name">{contestant.name}</h1>
                        </Link>
                        <img src={contestant.image} alt={contestant.name} />
                    </div>
                ))}
            </div>
        );
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <div className="header-container">
            <img src="https://64.media.tumblr.com/66b98a29f5298e8e2836eb46d3c2d5fc/2163af1d83ec4ac2-41/s540x810/80f9623b2e1940ecddd28126687a9fd4b36be543.pnj" alt="Survivor" className="title-image" />
            {props.contestants ? loaded() : loading()}

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
                <input type="submit" value="Create Contestant" className="button-text"/>
            </form>
        </div>
    );
}

export default Index;