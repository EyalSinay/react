import axios from 'axios';
import React, { useEffect, useState } from 'react'

function DisplaySomeData() {

    const [data, setData] = useState("")

    useEffect(() => {
        const controller = new AbortController();
        try {
            axios.get("https://data.gov.il/api/3/action/datastore_search?resource_id=5c78e9fa-c2e2-4771-93ff-7f400a12f7ba&limit=10000", {
                signal: controller.signal,
            })
                .then(response => {
                    // console.log(response.data.result.records);
                    setData(response.data.result.records);
                });
        } catch (err) {
            console.log(err);
        }
        return (() => {
            controller.abort();
        });
    }, []);

    return (
        <div>{JSON.stringify(data)}</div>
    )
}

export default DisplaySomeData;

/*
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// cancel the request
controller.abort()
*/