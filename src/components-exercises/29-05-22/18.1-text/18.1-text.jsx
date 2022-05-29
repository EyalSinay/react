import React from "react";
import TextShow from "./TextShow";

const TextEx = () => {

    return(
        <div>
            <TextShow text="Jerusalem Day is an Israeli national holiday that commemorates both the reunification of Jerusalem and the establishment of Israeli control over the Old City after the Six-Day War of 1967, when Israel militarily occupied East Jerusalem and the West Bank (later annexing only the former). It is celebrated annually on 28 Iyar on the Hebrew calendar, and is marked officially throughout Israel with state ceremonies and memorial services." maxLength={15} />
        </div>
    );
}

export default TextEx;