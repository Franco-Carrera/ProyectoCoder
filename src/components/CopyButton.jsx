import { CgCheck, CgClose, CgCopy, CgEnter } from "react-icons/cg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState, useEffect } from "react";

const CopyButton = ({ mail, mobile, setShow }) => {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (copied) setCopied(false);
    }, 2000);
  }, [copied]);
  return (
    <aside className="work mail">
      <CopyToClipboard text={mail}>
        <button className="work__item mail__right" title="Copiar" onClick={() => setCopied(true)}>
          {
            mobile &&
            <span style={{ height: "max-content", margin: "auto" }}>{!copied ? "copiar" : "Copiado"}</span>
          }
          <i className="footer__icon">{!copied ? <CgCopy/> : <CgCheck color="green"/>}</i>
        </button>
      </CopyToClipboard>
      <button className="mail__close" onClick={() => setShow(false)}>
        <i className="footer__icon"><CgClose/></i>
      </button>
      <a href={`mailto:${mail}`} className="work__item mail__left" title="Abrir el correo">
          {
            mobile &&
            <span style={{ height: "max-content", margin: "auto" }}>Abrir</span>
          }
        <i className="footer__icon"><CgEnter/></i>
      </a>
    </aside>
  );
};

export default CopyButton;
