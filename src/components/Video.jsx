import videoBackground from "../assets/video/background.webm";
import ReactPlayer from "react-player";
import { useEffect, useState } from "react";

function Video() {
  const [load, setLoad] = useState(false);
  const [state, setState] = useState({ playing: true });
  const handleControl = () => setState({ ...state, playing: !state.playing });

  useEffect(() => {
    if (document.querySelector(`video`)) {
      const tagVideo = document.querySelector(`video`);
      tagVideo.setAttribute(`class`, `video`);
      tagVideo.setAttribute(`autoplay`, `true`);
      tagVideo.setAttribute(`loop`, `true`);
      tagVideo.removeAttribute(`preload`);
    } else setLoad(true);
  }, [load]);

  return (
    <>
      <section className="video">
        <ReactPlayer
          url={videoBackground}
          muted={true}
          playing={state.playing}
        />
      </section>

      {state.playing ? (
        <button onClick={handleControl} className="video__control desactive">
          <span className="span__pause">pause</span>
        </button>
      ) : (
        <button onClick={handleControl} className="video__control active">
          <span className="span__play">play</span>
        </button>
      )}
    </>
  );
}

export default Video;
