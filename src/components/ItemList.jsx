import Item from "./Item";
// DEVUELVE EL PEDIDO TRAIDO DE ITEMLISTCONTAINER
function ItemList({ links }) {
  return (
    <>
      <main className="mainItemList">
        {links.map((link) => (
          <Item key={link.id} linkData={link} />
        ))}
      </main>
    </>
  );
}

export default ItemList;
