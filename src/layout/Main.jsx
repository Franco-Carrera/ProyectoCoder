import ItemListContainer from "../components/ItemListContainer";
import logo from "../assets/image/logo.svg";
import { useState, useEffect } from "react";

// RENDERIZA ITEMLISTCONTAINER Y DEMAS ETIQUETAS NECESARIAS PARA EL CUERPO DE LA PÁGINA
function Main() {
  const [mobile, setMobile] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth < 905) setMobile(true);
    else setMobile(false);
  });

  useEffect(() => {
    if (window.innerWidth < 905) setMobile(true);
    else setMobile(false);
  }, []);
  return (
    <>
      <main className="main">
        <section className="main__top">
          <p>David Martínez / Est. 1995</p>
          <p>/ Grafic Designer / Creative</p>
          <p>Strategy / Copywriter / Video Editor</p>
          <p>/ Print / Visual Art</p>
        </section>
        <figure className="main__logo main__middle">
          <img src={logo} alt="logo David Martinez" />
        </figure>
        <section className="main__bottom">
          <section className="routes">
            <ul className="routes__menu personal">
              <ItemListContainer
                type={!mobile ? "none" : "personal"}
                mobile={mobile}
              />
            </ul>
          </section>
          {mobile && (
            <section className="routes">
              <ul className="routes__menu work">
                <ItemListContainer type="work" />
              </ul>
            </section>
          )}
        </section>
      </main>
    </>
  );
}

export default Main;
