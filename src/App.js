import "./styles/App.css";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Footer from "./layout/Footer";
import Video from "./components/Video";
import DataContextProvider from "./components/DataContextProvider";

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
