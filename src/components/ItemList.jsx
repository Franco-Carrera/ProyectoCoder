function ItemList({ data }) {
  return (
    <li className="personal__list" key={data.id}>
      <a
        href={
          (data.name
            ? data.name.toLowerCase() === "email"
              ? "mailto:"
              : ""
            : "") + data.url.toLowerCase()
        }
        className="personal__item"
      >
        {data.title}
      </a>
    </li>
  );
}

export default ItemList;
