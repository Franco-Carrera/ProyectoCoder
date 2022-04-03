import "./styles/App.css";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import Video from "./components/Video";
import DataContextProvider from "./components/DataContextProvider";

function App() {
  return (
    <DataContextProvider>
      <Video />
      <Header />
      <Main />
      <Footer />
    </DataContextProvider>
  );
}

export default App;
