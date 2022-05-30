import React, { useState } from "react";
import axios from "axios";

const ChuckNorris1 = () => {
    const [joke, setJoke] = useState("");

    const onButtonClick = async () => {
        const response = await axios.get("https://api.chucknorris.io/jokes/random");
        setJoke(response.data.value);
    }


        return (
            <div>
                <button onClick={onButtonClick}>Get A Random Chuck Norris Joke</button>
                <h3>The Joke:</h3>
                <p>{joke}</p>
            </div>
        );
    
}

export default ChuckNorris1;