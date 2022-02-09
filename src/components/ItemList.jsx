import Item from "./Item";

// DEVUELVE EL PEDIDO TRAIDO DE ITEMLISTCONTAINER
function ItemList({ links }) {
  return (
    <>
      {
        links.length !== 0 &&
        links.map((link) => (
          <Item key={link.id} linkData={link}/> 
        ))
      }
    </>
  );
}

export default ItemList;
