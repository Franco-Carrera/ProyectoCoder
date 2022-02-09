//RENDERIZA TODO
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import "./styles/App.css";
import Wallpaper from "./components/Wallpaper";
// import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Wallpaper></Wallpaper>
      <Header></Header>
      {/* <ItemListContainer /> */}
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
