import axios from 'axios';
import React, { useEffect, useState } from 'react'

function AlgoliaApi() {
    const [inputUser, setInputUser] = useState("");
    const [term, setTerm] = useState("");
    const [queryResults, setQueryResults] = useState([]);

    useEffect(() => {
        const requestData = async () => {
            let param;
            if (term === "") {
                param = "hooks";
            } else {
                param = term;
            }

            try {
                const response = await axios.get(`https://hn.algolia.com/api/v1/search?query=${param}`);
                console.log(response.data);
                setQueryResults(response.data.hits);
            } catch (err) {
                console.log(err);
                setQueryResults(err);
            }
        }
        requestData();
    }, [term]);

    return (
        <div>
            <input type="text" name="inputUser" id="inputUser" onChange={e => setInputUser(e.target.value)} value={inputUser} />
            <button onClick={() => setTerm(inputUser)}>Search</button>
            <ul>
                {queryResults.map(item => {
                    return <li key={item.objectID}>
                        <a href={item.url}>{item.title}</a>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default AlgoliaApi