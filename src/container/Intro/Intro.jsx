import React, { useState } from "react";
import { meal } from "../../constants";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";
import "./Intro.css";

const Intro = () => {
  const [playVideo, setplayVideo] = useState(false);
  const vidRef = React.useRef();

  const handleVideo = () => {
    setplayVideo((prev) => !prev);

    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  console.log(vidRef.current)

  return (
    <div className="intro_video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
      />
      <div className="intro_video_overlay flex__center">
        <div
          className="intro_video_overlay_circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
