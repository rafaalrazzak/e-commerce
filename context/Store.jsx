import { useContext, createContext, useState, useMemo } from "react";

const Context = createContext();

const Provider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [searchModal, setSearchModal] = useState(false);
  const [countCart, setCountCart] = useState(3);

  useMemo(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setAllProducts(json));
  }, []);

  const exposed = {
    allProducts,
    searchModal,
    setSearchModal,
    countCart,
    setCountCart,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useStore = () => useContext(Context);
export default Provider;
