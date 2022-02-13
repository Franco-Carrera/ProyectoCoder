//RENDERIZA TODO
import "./styles/App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import videoBackground from "./assets/video/background.webm"

function App() {
  return (
    <>
      <video src={videoBackground} className="background" type="video/webm" muted autoPlay loop></video> 
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
