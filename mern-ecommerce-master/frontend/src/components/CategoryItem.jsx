import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
	return (
		<div className='group relative h-80 w-full overflow-hidden rounded-2xl shadow-[0_14px_30px_rgba(23,32,51,0.12)]'>
			<Link to={"/category" + category.href}>
				<div className='w-full h-full cursor-pointer'>
					<div className='absolute inset-0 z-10 bg-gradient-to-t from-[#172033]/80 via-[#172033]/10 to-transparent' />
					<img
						src={category.imageUrl}
						alt={category.name}
						className='w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110'
						loading='lazy'
					/>
					<div className='absolute bottom-0 left-0 right-0 p-4 z-20'>
						<h3 className='mb-1 text-2xl font-black text-white'>{category.name}</h3>
						<p className='text-sm text-white/80'>Shop the edit <span aria-hidden='true'>→</span></p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default CategoryItem;
