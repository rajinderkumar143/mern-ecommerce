import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const ProductCard = ({ product }) => {
	const { user } = useUserStore();
	const { addToCart } = useCartStore();
	const handleAddToCart = () => {
		if (!user) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		} else {
			// add to cart
			addToCart(product);
		}
	};

	return (
		<div className='sc-card group flex w-full relative flex-col overflow-hidden transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(23,32,51,0.12)]'>
			<div className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl bg-[#eef5f2]'>
				<img className='object-cover w-full' src={product.image} alt='product image' />
				<div className='absolute inset-0 bg-[#172033]/5 transition group-hover:bg-transparent' />
			</div>

			<div className='mt-4 px-5 pb-5'>
				<h5 className='text-lg font-bold tracking-tight text-[#172033]'>{product.name}</h5>
				<div className='mt-2 mb-5 flex items-center justify-between'>
					<p>
						<span className='text-2xl font-black text-[#087f72]'>${product.price}</span>
					</p>
				</div>
				<button
					className='sc-button sc-button-primary w-full'
					onClick={handleAddToCart}
				>
					<ShoppingCart size={22} className='mr-2' />
					Add to cart
				</button>
			</div>
		</div>
	);
};
export default ProductCard;
