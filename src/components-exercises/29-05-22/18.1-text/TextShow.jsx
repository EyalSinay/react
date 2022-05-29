import "./TextShow.style.css";
import React, { useState } from "react";
import ReadOp from "./ReadOp";


const TextShow = (props) => {

    const initialText = props.text.slice(0, props.maxLength);

    const [textToShow, setTextToShow] = useState(initialText);
    const [readOpType, setReadMoreType] = useState("read more");

    const onReadOpClick = () => {
        setTextToShow(prev => prev === props.text ? initialText : props.text);
        setReadMoreType(prev => prev === "read more" ? "show less" : "read more");
    }

    return(
        <div>
            <span>{textToShow}</span>
            {props.text.length > props.maxLength && <ReadOp type={readOpType} onReadOpClick={onReadOpClick} />}
        </div>
    );
}

export default TextShow;