import is_iOS from "./detect_IOS";

const handle_iOS = () => {
  const divRoot = document.getElementById("root");
  if (is_iOS()) {
    divRoot.classList.remove("default");
    divRoot.style.justifyContent = "start";
  } else {
    divRoot.classList.remove("is_iOS");
    divRoot.classList.add("default");
  }
};
export default handle_iOS;
