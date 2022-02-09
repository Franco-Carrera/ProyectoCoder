//RENDERIZA TODO
import "./styles/App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Wallpaper from "./components/Wallpaper";

function App() {
  return (
    <>
      <Wallpaper></Wallpaper>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
