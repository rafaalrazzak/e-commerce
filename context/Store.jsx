import { useContext, createContext, useState, useEffect } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json));
  }, []);

  const exposed = {
    allProducts,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useStore = () => useContext(Context);
export default Provider;
