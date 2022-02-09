import { icons } from "../utils/generalFuntions";

//Se renderiza cada Item del map ItemList
function Item({ linkData }) {
  return (
    <>
      <li className="personal__list" key={linkData.id}>
        <a href={(linkData.title === "email" ? "mailto:" : "") + linkData.url.toLowerCase()} className="personal__item"><i className="routes__icon">{icons(linkData.icon)}</i>{linkData.title}</a>
      </li>
    </>
  );
}
export default Item;
