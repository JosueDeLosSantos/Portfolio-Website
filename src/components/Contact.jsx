function Contact() {
	return (
		<div
			id='contact'
			className='flex min-h-[70vh] min-w-full items-center justify-center'
		>
			<div className='flex flex-col items-center justify-center gap-3 p-14 space-y-6'>
				<h1 className='text-center text-5xl md:text-7xl'>
					<span className='bg-gradient-to-r from-[#e9d7cc] to-[#fa7f77] bg-clip-text text-transparent'>
						Get in Touch
					</span>
				</h1>

				<p className='text-center text-lg font-semibold text-slate-200'>
					Do you want to get in touch? Send me an E-mail through this button and
					I will get back to you as soon as possible.
				</p>

				<a
					href='mailto:jdd1993@hotmail.com'
					className='text-nowrap rounded-lg border border-sky-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-sky-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-600'
				>
					Contact Me
				</a>
			</div>
		</div>
	);
}

export default Contact;
