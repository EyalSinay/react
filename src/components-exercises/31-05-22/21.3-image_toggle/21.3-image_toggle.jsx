import React, { useEffect, useRef, useState } from 'react'
import carrotColor from './carrot-color.jpg'
import parrotColor from './parrot-color.jpg'
import carrotBW from './carrot-bw.jpg'
import parrotBW from './parrot-bw.jpg'

function ImageToggle() {
    const [carrotSrc, setCarrotSrc] = useState(carrotBW);
    const [parrotSrc, setParrotSrc] = useState(parrotBW);

    const carrot = useRef();
    const parrot = useRef();

    useEffect(() => {
        carrot.current.addEventListener("mouseenter", e => {
            setCarrotSrc(carrotColor);
        });
        carrot.current.addEventListener("mouseout", e => {
            setCarrotSrc(carrotBW);
        });
        parrot.current.addEventListener("mouseenter", e => {
            setParrotSrc(parrotColor);
        });
        parrot.current.addEventListener("mouseout", e => {
            setParrotSrc(parrotBW);
        });
    },[]);

    return (
        <div>
            <img id="carrot" ref={carrot} width="40%" src={carrotSrc} alt="carrot" />
            <img id="parrot" ref={parrot} width="40%" src={parrotSrc} alt="parrot" />
        </div>
    )
}

export default ImageToggle;

