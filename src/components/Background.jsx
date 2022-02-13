import videoBackground from "../assets/video/background.webm"

function Background() {
  return (
    <>
      <video src={videoBackground} className="background" type="video/webm" muted autoPlay loop></video> 
    </>
  );
}

export default Background;