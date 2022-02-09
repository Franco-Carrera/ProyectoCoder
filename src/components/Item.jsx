//Se renderiza cada Item del map ItemList

const capitalLetter = (str) =>
  str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);

function Item({ linkData }) {
  return (
    <section>
      <aside className="link">
        {/* Contenedor links */}
        <div className="link__body">
          <button className="button__link-items">
            <a className="link__url" href={linkData.url}>
              <p className="title__link">{capitalLetter(linkData.title)}</p>
            </a>
            <i className="icon__link-items">{linkData.icon}</i>
          </button>
        </div>
        {/* ---------------------- */}
      </aside>
    </section>
  );
}
export default Item;
