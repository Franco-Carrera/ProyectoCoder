import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/image/logo.svg";
import is_IOS from "../utils/detect_IOS";

const Main = () => {
  const [mobile, setMobile] = useState(true);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 905) setMobile(false);
    else setMobile(true);
  });

  useEffect(() => {
    if (window.innerWidth > 905) setMobile(false);
    else setMobile(true);
  }, []);
  return (
    <>
      {!mobile ? (
        <main className="main">
          <figure className="main__container">
            <img src={logo} alt="logo David Martinez" className="main__logo" />
          </figure>
        </main>
      ) : (
        mobile && (
          <main className={is_IOS() ? "mainIOS" : "main"}>
            <picture
              className={is_IOS ? "main__containerIOS" : "main__container"}
            >
              <img
                src={logo}
                alt="logo David Martinez"
                className="main__logo"
              />
            </picture>
          </main>
        )
      )}
    </>
  );
};

export default Main;
