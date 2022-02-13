import Item from "./Item";
import { useEffect, useState } from "react";
import { getLinks } from "../utils/firebaseConfig";

// MAPEA LO TRAIDO POR FIREBASE
function ItemListContainer({ type, mobile }) {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    getLinks()
      .then((res) => setLinks(res))
      .catch((err) => console.error("Error searching items", err))
  }, []);
  return (
    <>
      {
        type === "none" ?
        links.map(link => <Item key={link.id} linkData={link} type="personal" mobile={mobile}/>) :
        links.filter(link => link.type === type).map(link => <Item key={link.id} linkData={link} type={type} mobile={mobile}/>)
      }
    </>
  );
}

export default ItemListContainer;
