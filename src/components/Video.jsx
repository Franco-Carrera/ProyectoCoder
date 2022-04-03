import videoBackground from "../assets/video/background.webm";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

function Video() {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    if (document.querySelector(`video`)) {
      const tagVideo = document.querySelector(`video`);
      tagVideo.setAttribute(`class`, `video`);
      tagVideo.setAttribute(`autoplay`, `true`);
      tagVideo.setAttribute(`loop`, `true`);
      tagVideo.removeAttribute(`preload`);
      tagVideo.removeAttribute(`style`);
    } else setLoad(true);
  }, [load]);
  return (
    <section className="video">
      <ReactPlayer url={videoBackground} muted={true} playing={true} />
    </section>
  );
}

export default Video;
