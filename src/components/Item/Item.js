import "./Item.css";

const Item = ({ itemData }) => {
  return (
    <div className="card">
      <img className="card__img" src={itemData.pictureUrl} alt="#"></img>
      <div className="cards__text">
        <p className="card__title-text">{itemData.title}</p>
        <div className="containerInfo">
          {/* <small className="small__text-info">{itemData.year}</small> */}
          <small className="smal__text-info">{itemData.description}</small>
          <small className="smal__text-info">{itemData.stock}</small>
          {/* data.price */}
        </div>
      </div>
    </div>
  );
};
export default Item;
