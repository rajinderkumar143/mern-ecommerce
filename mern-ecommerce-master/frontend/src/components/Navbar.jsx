import { ShoppingCart, UserPlus, LogIn, LogOut, Lock, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	return (
		<header className='fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(220,229,225,0.9)] z-40'>
			<div className='sc-container py-3'>
				<div className='flex flex-wrap items-center justify-between gap-4'>
					<Link to='/' className='flex items-center gap-2 text-2xl font-black tracking-tight text-[#172033]'>
						<span className='flex h-9 w-9 items-center justify-center rounded-xl bg-[#087f72] text-sm text-white'>S</span>
						Swift<span className='text-[#087f72]'>Cart</span>
					</Link>

					<div className='order-3 flex w-full max-w-xl items-center rounded-xl border border-[#dce5e1] bg-[#f7f8f6] px-3 py-2 md:order-none md:flex-1'>
						<Search size={18} className='text-[#94a3b8]' />
						<input aria-label='Search products' placeholder='Search products, categories, and more' className='w-full bg-transparent px-2 text-sm text-[#172033] outline-none placeholder:text-[#94a3b8]' />
					</div>

					<nav className='flex flex-wrap items-center gap-2 sm:gap-4'>
						<Link
							to={"/"}
							className='hidden text-sm font-semibold text-[#64748b] transition hover:text-[#087f72] sm:block'
						>
							Home
						</Link>
						{user && (
							<Link
								to={"/cart"}
								className='relative group rounded-lg p-2 text-sm font-semibold text-[#64748b] transition hover:bg-[#eef5f2] hover:text-[#087f72]'
							>
								<ShoppingCart className='inline-block mr-1 group-hover:text-emerald-400' size={20} />
								<span className='hidden sm:inline'>Cart</span>
								{cart.length > 0 && (
									<span
										className='absolute -right-1 -top-1 rounded-full bg-[#d97706] px-1.5 py-0.5 text-xs text-white'
									>
										{cart.length}
									</span>
								)}
							</Link>
						)}
						{isAdmin && (
							<Link
								className='sc-button sc-button-primary px-3 py-2'
								to={"/secret-dashboard"}
							>
								<Lock className='inline-block mr-1' size={18} />
								<span className='hidden sm:inline'>Dashboard</span>
							</Link>
						)}

						{user ? (
							<button
								className='sc-button border border-[#dce5e1] bg-white text-[#172033] hover:bg-[#eef5f2]'
								onClick={logout}
							>
								<LogOut size={18} />
								<span className='hidden sm:inline ml-2'>Log Out</span>
							</button>
						) : (
							<>
								<Link
									to={"/signup"}
									className='sc-button sc-button-primary'
								>
									<UserPlus className='mr-2' size={18} />
									Sign Up
								</Link>
								<Link
									to={"/login"}
									className='sc-button border border-[#dce5e1] bg-white text-[#172033] hover:bg-[#eef5f2]'
								>
									<LogIn className='mr-2' size={18} />
									Login
								</Link>
							</>
						)}
					</nav>
				</div>
			</div>
		</header>
	);
};
export default Navbar;
