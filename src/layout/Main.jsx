import logo from "../assets/image/logo.svg";

function Main() {
  return (
    <>
      <main className="main">
        <figure className="main__container">
          <img src={logo} alt="logo David Martinez" className="main__logo" />
        </figure>
      </main>
    </>
  );
}

export default Main;
