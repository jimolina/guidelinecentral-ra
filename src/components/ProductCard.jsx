import React from "react";
import "./ProductCard.scss"

const ProductCard = ({ name, description, price, imageUrl }) => {


	return (
		<div className="product-card">
			<div className="product-image">
				<img src={imageUrl} alt={name} />
			</div>
			<h2 className="className">
				{name}
			</h2>
			<p className="description">
				{description}
			</p>
			<div className="product-price">
				{price}
			</div>
			<div className="product-ctas">
				<button className="btn btn-view-details" onClick="">View Details</button>
			</div>
		</div>
	)
}

export default ProductCard
