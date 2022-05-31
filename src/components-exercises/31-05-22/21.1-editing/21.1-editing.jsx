import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';

function Editing() {
    const [someText, setSomeText] = useState("Some text");
    const [inputValue, setInputValue] = useState("");
    const [toggle, setToggle] = useState(false);
    const [valueButton, setValueButton] = useState("edit");

    const inputElement = useRef();

    const onButtonClick = () => {
        setValueButton(prev => prev === "edit" ? "save" : "edit");

        // user press save:
        if (toggle) {
            setValueButton("edit");
            if (inputValue) {
                setSomeText(inputValue);
            }
            setInputValue("");
        }

        setToggle(prev => prev ? false : true);
    }

    useEffect(() => {
        if (toggle) {
            inputElement.current.focus();
        }
    }, [toggle]);

    return (
        <div>
            <Button valueButton={valueButton} onButtonClick={onButtonClick} />
            <br />
            {
                toggle
                    ?
                    <input ref={inputElement} type="text" placeholder={someText} value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                    :
                    <p>{someText}</p>
            }
        </div>
    )
}

export default Editing;