import { useState } from "react";
import { Link } from "react-router-dom"

function Index(props) {
    // state to hold formData
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

    // handleChange function for form
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewForm((prevForm) => ({
            ...prevForm,
            [name]: ["wins", "seasons", "challengeWins", "votesAgainst"].includes(name)
                ? Number(value)
                : value
        }));
    };

    // handle submit function for form
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

    // loaded function
    const loaded = () => {
        return props.contestants.map((contestant) => (
            <div key={contestant._id} className="contestant">
                <Link to={`/contestant/${contestant._id}`}>
                    <h1>{contestant.name}</h1>
                </Link>
                <img src={contestant.image} alt={contestant.name} />
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
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
                <input type="submit" value="Create Contestant" />
            </form>
            {props.contestants ? loaded() : loading()}
        </section>
    );
}

export default Index;