const LoadingSpinner = () => {
	return (
		<div className='flex min-h-screen items-center justify-center bg-[#f7f8f6]'>
			<div className='relative'>
				<div className='h-14 w-14 rounded-full border-2 border-[#b8e3d8]' />
				<div className='absolute left-0 top-0 h-14 w-14 animate-spin rounded-full border-2 border-[#087f72] border-t-transparent' />
				<div className='sr-only'>Loading</div>
			</div>
		</div>
	);
};

export default LoadingSpinner;
