import { createContext, useEffect, useState } from "react";
import { getLinks } from "../utils/firebaseConfig";
import handle_iOS from "../utils/handle_IOS";

export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    handle_iOS();
    getLinks()
      .then((res) => setData(res))
      .catch((err) => console.error("Error searching items", err));
  }, []);
  return (
    <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  );
};

export default DataContextProvider;
