import ItemListContainer from "../components/ItemListContainer";
import logo from "../assets/image/logo.webp"
import { useEffect, useState } from "react";

// RENDERIZA ITEMLISTCONTAINER Y DEMAÁS ETIQUETAS NECESARIAS PARA EL CUERPO DE LA PÁGINA
function Main() {
  const [background, setBackground] = useState(true);
  window.addEventListener("resize", () => {
    if(window.innerWidth < 767) setBackground(true);
    else  setBackground(false);
  })
  useEffect(() => {
    if(window.innerWidth < 767) setBackground(true);
    else  setBackground(false);
  }, [])
  return (
    <main className="main">
      {
        background &&
        <figure className="main__logo">
          <img src={logo} alt="logo"/>
        </figure>
      }
      <section className="routes">
        <ul className="routes__menu personal">
          <ItemListContainer />
        </ul>
      </section>
      <section className="routes">
        <ul className="routes__menu works">
          <li>
            <a href="/" className="works__item"><i className="routes__icon">icon</i></a>
          </li>
          <li>
            <a href="/" className="works__item"><i className="routes__icon">icon</i></a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Main;
