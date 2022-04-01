import "./styles/App.css";
import DataContextProvider from "./components/DataContextProvider";
import Video from "./components/Video";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";

function App() {
  return (
    <>
      <DataContextProvider>
        <Video />
        <Header />
        <Main />
        <Footer />
      </DataContextProvider>
    </>
  );
}

export default App;
