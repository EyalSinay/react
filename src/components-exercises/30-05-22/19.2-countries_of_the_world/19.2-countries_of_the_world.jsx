import axios from 'axios';
import React, { useEffect, useState } from 'react'

function CountriesOfTheWorld() {
    const [term, setTerm] = useState("");
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const requestData = async () => {
            let param;
            if(term !== ""){
                param = "name/" + term;
            } else {
                param = "all";
            }

            const response = await axios.get("https://restcountries.com/v3.1/" + param);
            setCountries(response.data);
        }
        requestData();
    }, [term]);

    return (
        <div>
            <input type="text" name="term" id="term" onChange={e => setTerm(e.target.value)} value={term} />
            <ul>
                {countries.map(country => {
                    return <li key={country.name.common}>{country.name.common}</li>
                })}
            </ul>
        </div>
    )
}

export default CountriesOfTheWorld;