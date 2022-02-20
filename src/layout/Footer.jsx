import ItemListContainer from "../components/ItemListContainer";
import { useEffect, useState } from "react";

function Footer() {
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
    <footer className="footer">
      <nav className="footer__container">
        <ul className="footer__menu personal">
          <ItemListContainer
            type={!mobile ? "none" : "personal"}
            mobile={mobile}
          />
        </ul>
      </nav>
      {mobile && (
        <nav className="footer__container">
          <ul className="footer__menu work">
            <ItemListContainer type="work" />
          </ul>
        </nav>
      )}
    </footer>
  );
}

export default Footer;
