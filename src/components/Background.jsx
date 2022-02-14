import videoBackground from "../assets/video/background.webm";

const Background = () => {
  return (
    <>
      <video
        src={videoBackground}
        className="background"
        type="video/webm"
        muted
        autoPlay
        loop
      ></video>
    </>
  );
};

export default Background;
