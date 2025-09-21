import React, { useState } from "react";
import "./ProductCard.scss"

const ProductCard = ({ name, description, price, imageUrl }) => {
	const [showFullDescription, setShowFullDescription] = useState(false);

	const shortDescription = description.length > 80
		? description.slice(0, 80) + "..."
		: description

	const handleToggleDescription = () => {
		setShowFullDescription((prev) => !prev);
	}

	const handleAddToCart = () => {
		console.log(`Added '${name}' to the Cart`);
	}

	return (
		<div className="product-card">
			<div className="product-image">
				<img src={imageUrl} alt={name} />
			</div>
			<h2 className="product-name">
				{name}
			</h2>
			<p className="product-description">
				{showFullDescription ? description : shortDescription}
			</p>
			<div className="product-price">
				{price}
			</div>
			<div className="product-ctas">
				<button className="btn btn-view-details" onClick={handleToggleDescription}>
					{showFullDescription ? "Hide Details" : "View Details"}
				</button>
				<button className="btn btn-add-to-cart" onClick={handleAddToCart}>
					Add to Cart
				</button>
			</div>
		</div>
	)
}

export default ProductCard
