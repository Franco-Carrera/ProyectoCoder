import React from "react";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getLinks } from "../utils/firebaseConfig";

// MAPEA LO TRAIDO POR FIREBASE
function ItemListContainer() {
  const [links, setLinks] = useState([]);
  //possible state Loading

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
    return () => {
      setLinks([]);
    };
  }, []);

  return (
    <div className="itemListContainer">
      <h3>Links</h3>
      <ItemList links={links} />
    </div>
  );
}

export default ItemListContainer;
