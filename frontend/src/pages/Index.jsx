import { useState } from "react";
import { Link } from "react-router-dom"

function Index(props) {
    // state to hold formData
    const [newForm, setNewForm] = useState({
        name: "",
        wins: 0,
        seasons: 0,
        image: "",
        challengeWins: 0,
        idolsFound: 0,
        votesAgainst: 0,
        daysLasted: "",
        strength: "",
        weakness: "",
        quote: ""
    });

    // handleChange function for form
    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewForm((prevForm) => ({
            ...prevForm,
            [name]: ["wins", "seasons", "challengeWins", "idolsFound", "votesAgainst"].includes(name)
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
            seasons: 0,
            image: "",
            challengeWins: 0,
            idolsFound: 0,
            votesAgainst: 0,
            daysLasted: "",
            strength: "",
            weakness: "",
            quote: ""
        });
    };

    // loaded function
    const loaded = () => {
        return props.contestants.map((contestant) => (
            <div key={contestant._id} className="contestant">
                <Link to={`/contestants/${contestant._id}`}>
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
                    placeholder="name"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.image}
                    name="image"
                    placeholder="image URL"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    value={newForm.wins}
                    name="wins"
                    placeholder="wins"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    value={newForm.seasons}
                    name="seasons"
                    placeholder="seasons"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    value={newForm.challengeWins}
                    name="challengeWins"
                    placeholder="challenge wins"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    value={newForm.idolsFound}
                    name="idolsFound"
                    placeholder="idols found"
                    onChange={handleChange}
                />
                <input
                    type="number"
                    value={newForm.votesAgainst}
                    name="votesAgainst"
                    placeholder="votes against"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.daysLasted}
                    name="daysLasted"
                    placeholder="days lasted"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.strength}
                    name="strength"
                    placeholder="strength"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.weakness}
                    name="weakness"
                    placeholder="weakness"
                    onChange={handleChange}
                />
                <input
                    type="text"
                    value={newForm.quote}
                    name="quote"
                    placeholder="quote"
                    onChange={handleChange}
                />
                <input type="submit" value="Create Contestant" />
            </form>
            {props.contestants ? loaded() : loading()}
        </section>
    );
}

export default Index;