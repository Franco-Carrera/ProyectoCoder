//RENDERIZA TODO
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import "./styles/App.css";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <Header></Header>
      <ItemListContainer />
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
