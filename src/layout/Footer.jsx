import ItemListContainer from "../components/ItemListContainer";
import is_IOS from "../utils/detect_IOS";

function Footer() {
  return (
    <footer className={is_IOS() ? "footerIOS" : "footer"}>
      <ItemListContainer />
    </footer>
  );
}
export default Footer;
