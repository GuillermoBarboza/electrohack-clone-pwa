import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions";

const Product = ({ match }) => {
	const dispatch = useDispatch();

	const product = useSelector((store) => {
		return store.products.find((product) => {
			return (
				product.name.toLowerCase().trim().replace(/ /g, "-") ===
				match.params.product
			);
		});
	});

	return (
		<>
			<div className="container margin-product">
				<div className="row">
					<div className="col-lg-7">
						<div class="card mb-4">
							<img src={product.image} class="card-img-top" alt="Product" />
							<div class="card-body p-5">
								<h4 class="card-title font-italic">Specifications:</h4>
								<hr className="my-3" />
								<h5>Model: {product.name}</h5>
								<p class="card-text">Description: {product.description}</p>
								<p class="card-text">
									<small class="text-muted">
										<i class="far fa-comment-alt mr-1"></i> Report incorrect
										product information.
									</small>
								</p>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="border">
							<div className="product-header">
								<h4>{product.name}</h4>
								<p>{product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
							</div>
							<div className="product-price">
								<h4>
									<span>Price: </span>${product.price}
								</h4>
								<p className="mb-5">
									<small>FREE Shipping.</small>
								</p>
								<button
									className="btn btn-custom btn-block"
									onClick={() => dispatch(addToCart(product))}
								>
									<i class="fas fa-shopping-cart mr-2"></i> Add to Cart
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Product;
