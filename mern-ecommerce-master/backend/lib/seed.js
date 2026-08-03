import Product from "../models/product.model.js";

const products = [
	{
		name: "Slim Fit Jeans",
		description: "Classic slim fit denim jeans for everyday wear.",
		price: 49.99,
		image: "/jeans.jpg",
		category: "jeans",
		isFeatured: true,
	},
	{
		name: "Oversized T-Shirt",
		description: "Soft cotton oversized t-shirt with a relaxed fit.",
		price: 24.99,
		image: "/tshirts.jpg",
		category: "t-shirts",
		isFeatured: true,
	},
	{
		name: "Running Shoes",
		description: "Lightweight running shoes for daily training.",
		price: 69.99,
		image: "/shoes.jpg",
		category: "shoes",
		isFeatured: true,
	},
	{
		name: "Retro Glasses",
		description: "Minimal retro-style glasses frame.",
		price: 19.99,
		image: "/glasses.png",
		category: "glasses",
	},
	{
		name: "Denim Jacket",
		description: "Heavy denim jacket with a streetwear fit.",
		price: 79.99,
		image: "/jackets.jpg",
		category: "jackets",
	},
	{
		name: "Formal Suit",
		description: "Tailored suit for formal events and office wear.",
		price: 129.99,
		image: "/suits.jpg",
		category: "suits",
	},
	{
		name: "Leather Backpack",
		description: "Durable backpack for everyday carry.",
		price: 54.99,
		image: "/bags.jpg",
		category: "bags",
	},
];

export const seedProducts = async () => {
	await Product.bulkWrite(
		products.map((product) => ({
			updateOne: {
				filter: { name: product.name, category: product.category },
				update: { $setOnInsert: product },
				upsert: true,
			},
		}))
	);
	console.log("Seeded sample products");
};