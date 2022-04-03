import ItemList from "./ItemList";
import Loading from "./Loading";
import { useContext } from "react";
import { DataContext } from "./DataContextProvider";

function ItemListContainer() {
  const test = useContext(DataContext);
  return (
    <>
      {test.data.length === 0 ? (
        <Loading />
      ) : (
        <nav className="footer__container">
          <ul className="footer__menu personal">
            {test.data.map((data) => (
              <ItemList key={data.id} data={data} />
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

export default ItemListContainer;
