import ItemList from "./ItemList"
import { useEffect, useState } from "react";
import { getLinks } from "../utils/firebaseConfig";

// MAPEA LO TRAIDO POR FIREBASE
function ItemListContainer() {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    getLinks()
      .then((links) => {
        setLinks(links);
      })
      .catch((err) => {
        console.log("Error searching items", err);
      })
      .finally(() => {
        console.log("Finally useEffect promise.");
      });
  }, []);
  return (
    <>
      <ItemList links={links} />
    </>
  );
}

export default ItemListContainer;
