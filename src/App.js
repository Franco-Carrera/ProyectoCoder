import logo from "./logo.svg";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/Navbar/Navbar";

function App() {
  const Titulo = () => {
    return <h3 className="h3">Inicio de app david</h3>;
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* Primer Componente */}
        <NavBar />
        <Titulo />
        {/* Home */}
        <ItemListContainer />
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
