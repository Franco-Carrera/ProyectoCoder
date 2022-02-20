//import { icons } from "../utils/generalFuntions";

function Item({ linkData, type }) {
  return (
    <>
      {type && <span className="footer__title">{linkData.title}</span>}

      {/* {linkData.icon !== undefined && (
        <i className="footer__icon">{icons(linkData.icon)}</i>
        //Ya no aparece
      )} */}
    </>
  );
}
export default Item;
