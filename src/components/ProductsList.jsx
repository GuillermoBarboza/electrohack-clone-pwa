import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
const ProductsList = () => {
	const productStore = useSelector((store) => store.products);
	const [scroll, setScroll] = useState(true);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [scroll]);

	return (
		<div className="mx-auto pb-5">
			<button id="myBtn" onClick={() => setScroll(!scroll)}>
				<i class="fas fa-chevron-up"></i>
			</button>
			<div className="row">
				{productStore.length > 0 &&
					productStore.map((product) => <ProductCard product={product} />)}
			</div>
		</div>
	);
};

export default ProductsList;
