import { useContext, useEffect, useState } from "react";
import { DataContext } from "../components/DataContextProvider";

function Header() {
  const test = useContext(DataContext);
  const [email, setEmail] = useState("");
  useEffect(() => {
    if (test.data.length > 0) {
      const dataFound = test.data.find(data => data.name === "email");
      setEmail(dataFound.url);
    }
  }, [test.data]);
  return (
    <header className="header">
      <section className="header__container">
        <h1 className="header__info">David Martínez</h1>
        <p className="header__info">&nbsp;/ Est. 1995 / Graphic Designer / Creative Strategy / Copywriter / Video Editor / Print / Visual Art {email && `/ ${email}`}</p>
      </section>
    </header>
  );
}

export default Header;