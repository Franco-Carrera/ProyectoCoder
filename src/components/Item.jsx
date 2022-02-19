import { icons } from "../utils/generalFuntions";

function Item({ linkData, type }) {
  return (
    <>
      {
        type === "personal" &&
        <span className="footer__title">{linkData.title}</span>
      }
      {
        linkData.icon !== undefined &&
        <i className="footer__icon">{icons(linkData.icon)}</i>
      }
    </>
  );
}

export default Item;