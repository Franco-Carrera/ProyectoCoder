import { useEffect, useState } from "react";
import videoBackground from "../assets/video/background.webm"

function Wallpaper() {
  const [background, setBackground] = useState(true);
  window.addEventListener("resize", () => {
    if(window.innerWidth > 767) setBackground(true);
    else  setBackground(false);
  })
  useEffect(() => {
    if(window.innerWidth > 767) setBackground(true);
    else  setBackground(false);
  }, [])
  return (
    <>
      {
        background &&
        <video src={videoBackground} className="background" type="video/webm" muted autoPlay loop></video> 
      }
    </>
  );
}

export default Wallpaper;