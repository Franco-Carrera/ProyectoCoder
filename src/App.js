//RENDERIZA TODO
import "./styles/App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import videoBackground from "./assets/video/background.webm";

function App() {
  return (
    <>
      <video
        src={videoBackground}
        className="background"
        type="video/webm"
        muted
        preload=""
        autoPlay
        loop
      ></video>

      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
