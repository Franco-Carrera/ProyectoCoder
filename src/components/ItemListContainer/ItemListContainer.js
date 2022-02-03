import { useState, useEffect } from "react";
import { data } from "../../data";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(data), 2000);
  });
}

const ItemListContainer = () => {
  const [itemList, setItemList] = useState([]);

  useEffect(() => {
    const list = getList();

    list
      .then(
        (list) => {
          setItemList(list);
        },
        (err) => console.log(err)
      )
      .catch((reason) => {
        console.log(reason);
      });
  }, []);

  return (
    <main>
      <h1>Portafolio</h1>
      <ItemList items={itemList} />
    </main>
  );
};

export default ItemListContainer;
