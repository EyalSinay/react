import React from "react";
import axios from "axios";

class ChuckNorris2 extends React.Component {
    state = { joke: "", categoriesJokes: [] }

    async componentDidMount() {
        const categoriesJokesResponse = await axios.get("https://api.chucknorris.io/jokes/categories");
        this.setState({categoriesJokes: categoriesJokesResponse.data});
        // console.log(categoriesJokesResponse.data);
    }

    onButtonClick = async (e) => {
        const jokeResponse = await axios.get("https://api.chucknorris.io/jokes/random?category=" + e.target.value);
        this.setState({ joke: jokeResponse.data.value });
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.categoriesJokes.map((categoryStr, index) => <button key={index} value={categoryStr} onClick={this.onButtonClick}>{categoryStr}</button>)}
                </div>
                <h3>The Joke:</h3>
                <p>{this.state.joke}</p>
            </div>
        );
    }
}

export default ChuckNorris2;