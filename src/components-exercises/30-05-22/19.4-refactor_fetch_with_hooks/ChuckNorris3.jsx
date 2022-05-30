import React, { useState } from "react";
import axios from "axios";

const ChuckNorris3 = () => {
    const [joke, setJoke] = useState([]);
    const [input, setInput] = useState("");
    const [total, setTotal] = useState(0);

    const onInputChange = (e) => {
        const userInput = e.target.value;
        setInput(userInput);
        updateJoke(userInput);
    }

    const updateJoke = async (input) => {
        if (input.length < 3 || input.length > 120) {
            setJoke([{ id: "000", value: "size must be between 3 and 120" }]);
            setTotal(0);
        } else {
            const jokeResponse = await axios.get("https://api.chucknorris.io/jokes/search?query=" + input);
            setJoke(jokeResponse.data.result);
            setTotal(jokeResponse.total);
            console.log(jokeResponse.data.result);
        }
    }

        return (
            <div>
                <label htmlFor="text">Search a Chuck Norris Jokes: </label>
                <input type="text" name="text" id="text" onChange={onInputChange} value={input} />
                <h3>The Joke:</h3>
                <p>We found {total} Chuck Norris Jokes:</p>
                <ul>
                    {joke.map(jokeObj => <li key={jokeObj.id}>{jokeObj.value}</li>)}
                </ul>
            </div>
        );
    
}

export default ChuckNorris3;