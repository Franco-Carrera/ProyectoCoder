import CopyButton from "./CopyButton";
import Item from "./Item";
import { useEffect, useState } from "react";

function ItemList({ linkData, mobile, type }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      if (mobile === false && show) setShow(false);
    }, 5000);
  });

  return (
    <>
      <li className={`${type}__list`} key={linkData.id}>
        {linkData.icon.toLowerCase() === "email" ? (
          !show ? (
            <button className={`${type}__item`} onClick={() => setShow(true)}>
              <Item type={type} linkData={linkData} />
            </button>
          ) : (
            <CopyButton
              mail={linkData.url.toLowerCase()}
              setShow={setShow}
              mobile={mobile}
            />
          )
        ) : (
          <a href={linkData.url.toLowerCase()} className={`${type}__item`}>
            <Item type={type} linkData={linkData} />
          </a>
        )}
      </li>
    </>
  );
}

export default ItemList;
