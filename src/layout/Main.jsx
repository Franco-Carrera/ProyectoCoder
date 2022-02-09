import logo from "../assets/image/logo.webp"
import { AiFillBehanceSquare, AiFillLinkedin, AiOutlineInstagram, AiOutlineLink } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { useEffect, useState } from "react";

// RENDERIZA ITEMLISTCONTAINER Y DEMAÁS ETIQUETAS NECESARIAS PARA EL CUERPO DE LA PÁGINA
function Main() {
  const [background, setBackground] = useState(true);
  const icons = [
    { name: "behance", icon: AiFillBehanceSquare },
    { name: "gmail", icon: CgMail },
    { name: "instagram", icon: AiOutlineInstagram },
    { name: "linkedin", icon: AiFillLinkedin },
    { name: "portfolio", icon: AiOutlineLink }
  ]
  const foundIcon = icons.find(item => item.name === "portfolio");
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
          <li className="personal__list">
            <a href="/" className="personal__item"><i className="routes__icon">{<foundIcon.icon/>}</i> Portfolio</a>
          </li>
          <li className="personal__list">
            <a href="/" className="personal__item"><i className="routes__icon">icon</i> Gmail</a>
          </li>
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
