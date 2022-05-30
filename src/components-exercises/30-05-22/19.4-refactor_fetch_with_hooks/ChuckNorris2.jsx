import React, { useEffect, useState } from "react";
import axios from "axios";

const ChuckNorris2 = () => {
    const [joke, setJoke] = useState("");
    const [categoriesJokes, setCategoriesJokes] = useState([]);

    useEffect(() => {
        const getCategoriesJoke = async () => {
            const categoriesJokesResponse = await axios.get("https://api.chucknorris.io/jokes/categories");
            setCategoriesJokes(categoriesJokesResponse.data);
            // console.log(categoriesJokesResponse.data);
        }
        getCategoriesJoke();
    },[]);

    const onButtonClick = async (e) => {
        const jokeResponse = await axios.get("https://api.chucknorris.io/jokes/random?category=" + e.target.value);
        setJoke(jokeResponse.data.value);
    }

    return (
        <div>
            <div>
                {categoriesJokes.map((categoryStr, index) => <button key={index} value={categoryStr} onClick={onButtonClick}>{categoryStr}</button>)}
            </div>
            <h3>The Joke:</h3>
            <p>{joke}</p>
        </div>
    );
}

export default ChuckNorris2;