import React from "react";
import axios from "axios";

class ChuckNorris1 extends React.Component {
    state = { joke: "" }

    onButtonClick = async () => {
        const response = await axios.get("https://api.chucknorris.io/jokes/random");
        this.setState({ joke: response.data.value });
    }

    render() {
        return (
            <div>
                <button onClick={this.onButtonClick}>Get A Random Chuck Norris Joke</button>
                <h3>The Joke:</h3>
                <p>{this.state.joke}</p>
            </div>
        );
    }
}

export default ChuckNorris1;