//Se renderiza cada Item del map ItemList
function Item({ linkData }) {
  const capitalLetter = (str) =>
    str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

  return (
    <>
      <article className="itemsContainer">
        <div className="body__items">
          <button className="button__link-items">
            <a href={linkData.url}>URL</a>
          </button>
          <i>{linkData.icon}</i>
          <p className="title__item">{capitalLetter(linkData.title)}</p>
        </div>
      </article>
    </>
  );
}
export default Item;
