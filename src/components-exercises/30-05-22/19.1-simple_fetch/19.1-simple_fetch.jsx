import axios from 'axios';
import React, { useEffect, useState } from 'react'

function SimpleFetch() {

    const [movieTitle, setMovieTitle] = useState("");
    const [movieDirector, setMovieDirector] = useState("");

    useEffect(() => {
        axios.get("https://swapi.dev/api/films/1/")
            .then(response => {
                console.log(response.data);
                setMovieTitle(response.data.title);
                setMovieDirector(response.data.director);
            });

    }, []);

    return (
        <div>
            <h2>{movieTitle}</h2>
            <h3>{movieDirector}</h3>
        </div>
    )
}

export default SimpleFetch;