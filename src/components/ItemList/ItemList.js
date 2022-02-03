import Item from "../Item/Item";
import "./ItemList.css";

const ItemList = ({ items }) => {
  return (
    <article className="containerWork">
      {items.map((item) => (
        <Item key={item.id} itemData={item}></Item>
      ))}
    </article>
  );
};
export default ItemList;
