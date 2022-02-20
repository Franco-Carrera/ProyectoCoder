import "./styles/App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Video from "./components/Video";

function App() {
  return (
    <>
      <Video />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
