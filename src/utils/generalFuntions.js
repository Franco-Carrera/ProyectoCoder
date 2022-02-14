// FUNCIONES GENERALES
import {
  AiFillBehanceSquare,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineLink, //Check que es
} from "react-icons/ai";
import { CgMail } from "react-icons/cg";

const data = [
  { name: "behance", icon: AiFillBehanceSquare },
  { name: "email icon", icon: CgMail },
  { name: "instagram", icon: AiOutlineInstagram },
  { name: "linkedin", icon: AiFillLinkedin },
  { name: "portfolio", icon: AiOutlineLink },
];

export const icons = (element) => {
  let foundIcon = data.find((item) => item.name === element.toLowerCase());
  if (foundIcon) return <foundIcon.icon />;
  else return "?";
};
