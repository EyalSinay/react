import React from "react";
import ChuckNorris1 from "./ChuckNorris1";
import ChuckNorris2 from "./ChuckNorris2";
import ChuckNorris3 from "./ChuckNorris3";

class ChuckNorrisEx extends React.Component {

    render() {
        return (
            <div>
                <ChuckNorris1 />
                <section>----------------------------</section>
                <ChuckNorris2 />
                <section>----------------------------</section>
                <ChuckNorris3 />
            </div>
        );
    }
}

export default ChuckNorrisEx;