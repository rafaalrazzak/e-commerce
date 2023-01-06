import {products} from "../../../data/products";

export default function handler(req, res){
	const id = parseInt(req.query.id);
	const data = products.find(product => product.id === id);
	res.status(200).json(data);
}