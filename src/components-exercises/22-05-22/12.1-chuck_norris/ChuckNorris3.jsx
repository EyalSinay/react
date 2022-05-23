import React from "react";
import axios from "axios";

class ChuckNorris3 extends React.Component {
    state = { joke: [], input: "", total: 0 }

    onInputChange = (e) => {
        const userInput = e.target.value;
        this.setState({ input: userInput });
        this.updateJoke(userInput);
    }

    updateJoke = async (input) => {
        if (input.length < 3 || input.length > 120) {
            this.setState({ joke: [{ id: "000", value: "size must be between 3 and 120" }], total: 0 });
        } else {
            const jokeResponse = await axios.get("https://api.chucknorris.io/jokes/search?query=" + input);
            this.setState({ joke: jokeResponse.data.result, total: jokeResponse.total });
            console.log(jokeResponse.data.result);
        }
    }

    render() {
        return (
            <div>
                <label htmlFor="text">Search a Chuck Norris Jokes: </label>
                <input type="text" name="text" id="text" onChange={this.onInputChange} value={this.state.input} />
                <h3>The Joke:</h3>
                <p>We found {this.state.total} Chuck Norris Jokes:</p>
                <ul>
                    {this.state.joke.map(jokeObj => <li key={jokeObj.id}>{jokeObj.value}</li>)}
                </ul>
            </div>
        );
    }
}

export default ChuckNorris3;