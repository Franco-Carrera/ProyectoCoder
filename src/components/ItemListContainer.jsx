import ItemList from "./ItemList";
import { getLinks } from "../utils/firebaseConfig";
import { useState, useEffect } from "react";

function ItemListContainer({ mobile, type }) {
  const [links, setLinks] = useState([]);
  useEffect(() => {
    getLinks()
      .then((res) => setLinks(res))
      .catch((err) => console.error("Error searching items", err));
    return () => {
      setLinks([]);
    };
  }, []);
  return (
    <>
      {type === "none"
        ? links.map((link) => (
            <ItemList
              key={link.id}
              linkData={link}
              type="personal"
              mobile={mobile}
            />
          ))
        : links
            .filter((link) => link.type === type)
            .map((link) => (
              <ItemList
                key={link.id}
                linkData={link}
                type={type}
                mobile={mobile}
              />
            ))}
    </>
  );
}

export default ItemListContainer;
