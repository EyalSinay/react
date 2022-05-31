import React, { useEffect, useRef, useState } from 'react'
import myVideo from './389c673c-ac9e-4bc4-8bd8-59e6848f694b.mp4';

function PlayPauseVideo() {
    const [myVolume, setMyVolume] = useState(0.2);
    const video = useRef();

    useEffect(() => {
        video.current.volume = myVolume;
        console.log(myVolume);
    },[myVolume]);

  return (
    <div>
        <button onClick={() => video.current.play()}>Play Video</button>
    <button onClick={() => video.current.pause()}>Pause Video</button><br/>
    <video ref={video} id="my-video" width="320" height="176" src={myVideo} />
    <button onClick={() => setMyVolume(prev => prev < 1 ? prev + 0.2 : prev)}>+</button>
    <button onClick={() => setMyVolume(prev => prev > 0 ? prev - 0.2 : prev)}>-</button>
    </div>
  );
}

export default PlayPauseVideo;