import logo from "../assets/image/logo.svg"
import is_iOS from "../utils/detect_iOS";

function Main() {
  return (
    <main className={is_iOS() ? "main" : "nueva-clase"}>
      <picture className="main__container">
        <img src={logo} alt="logo David Martinez" className="main__logo"/>
      </picture>
    </main>
  );
}

export default Main;