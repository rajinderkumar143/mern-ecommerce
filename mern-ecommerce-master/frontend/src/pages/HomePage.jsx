import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/jeans", name: "Jeans", imageUrl: "/jeans.jpg" },
	{ href: "/t-shirts", name: "T-shirts", imageUrl: "/tshirts.jpg" },
	{ href: "/shoes", name: "Shoes", imageUrl: "/shoes.jpg" },
	{ href: "/glasses", name: "Glasses", imageUrl: "/glasses.png" },
	{ href: "/jackets", name: "Jackets", imageUrl: "/jackets.jpg" },
	{ href: "/suits", name: "Suits", imageUrl: "/suits.jpg" },
	{ href: "/bags", name: "Bags", imageUrl: "/bags.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen overflow-hidden'>
			<div className='sc-container relative z-10 py-12 sm:py-16'>
				<div className='mx-auto mb-12 max-w-3xl text-center'>
					<p className='sc-eyebrow mb-4'>Curated for your everyday</p>
					<h1 className='text-4xl font-black tracking-tight text-[#172033] sm:text-6xl'>
						Style that moves <span className='text-[#087f72]'>with you.</span>
					</h1>
					<p className='mx-auto mt-5 max-w-xl text-base leading-7 text-[#64748b] sm:text-lg'>
						Discover considered essentials and standout pieces, delivered with a simpler, more thoughtful shopping experience.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;
