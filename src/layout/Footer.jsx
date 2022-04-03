import ItemListContainer from "../components/ItemListContainer";
import is_iOS from "../utils/detect_IOS";

function Footer() {
  return (
    <footer className={is_iOS() ? "footerIOS" : "footer"}>
      <ItemListContainer />
    </footer>
  );
}
export default Footer;
