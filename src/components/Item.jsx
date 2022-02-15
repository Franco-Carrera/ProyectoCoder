//Se renderiza cada Item del map ItemList
function Item({ linkData, type, mobile }) {
  return (
    <>
      <li className={`${type}__list`} key={linkData.id}>
        <a
          href={
            (linkData.icon.toLowerCase() === "email" ? "mailto:" : "") +
            linkData.url.toLowerCase()
          }
          className={`${type}__item`}
        >
          <span className="routes__title routes__title--desktop">
            <span className="routes__title-contain routes__title-contain--desktop">
              {linkData.title.toLowerCase()}
            </span>
          </span>
        </a>
      </li>
    </>
  );
}
export default Item;
