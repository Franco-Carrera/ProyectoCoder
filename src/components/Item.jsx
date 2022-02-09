import { AiFillBehanceSquare, AiFillLinkedin, AiOutlineInstagram, AiOutlineLink } from "react-icons/ai";
import { CgMail } from "react-icons/cg";

//Se renderiza cada Item del map ItemList
function Item({ linkData }) {
  const icons = [
    { name: "behance", icon: AiFillBehanceSquare },
    { name: "gmail", icon: CgMail },
    { name: "instagram", icon: AiOutlineInstagram },
    { name: "linkedin", icon: AiFillLinkedin },
    { name: "portfolio", icon: AiOutlineLink }
  ]
  const foundIcon = icons.find(item => item.name === linkData.icon);
  return (
    <>
      <li className="personal__list">
        <a href={linkData.url} className="personal__item"><i className="routes__icon">{<foundIcon.icon/>}</i>{linkData.title}</a>
      </li>
    </>
  );
}
export default Item;
