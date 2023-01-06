import {useContext, createContext, useState, useEffect} from "react";
import useLocalStorage from "../hooks/useLocalStorage"

const Context = createContext();

const Provider = ({children}) => {
	const [allProducts, setAllProducts] = useState([]);
	const [searchModal, setSearchModal] = useState(false);
	const [cartProduct, setCartProduct] = useLocalStorage("carts", []);

	useEffect(() => {
		fetch("http://localhost:3000/api/products")
				.then(response => response.json()).then(data => setAllProducts(data));
	}, []);

	const exposed = {
		allProducts, searchModal, setSearchModal, cartProduct, setCartProduct,
	};

	return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useStore = () => useContext(Context);
export default Provider;
