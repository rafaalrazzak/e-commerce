import {useContext, createContext, useState, useMemo} from "react";

const Context = createContext();

const Provider = ({children}) => {
	const [allProducts, setAllProducts] = useState([]);
	const [searchModal, setSearchModal] = useState(false);
	const [cartProduct, setCartProduct] = useState([]);

	useMemo(() => {
		fetch("https://fakestoreapi.com/products")
				.then((res) => res.json())
				.then((json) => setAllProducts(json));
	}, []);

	const exposed = {
		allProducts, searchModal, setSearchModal, cartProduct, setCartProduct,
	};

	return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useStore = () => useContext(Context);
export default Provider;
