import React from "react";
import { useState, useEffect } from "react";
import logo from "../assets/image/logo.svg";

const MainLogo = () => {
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
          <table className="main">
            <tbody className="main__container">
              <tr>
                <td>
                  <img
                    src={logo}
                    alt="logo David Martinez"
                    className="main__logo"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        )
      )}
    </>
  );
};

export default MainLogo;
