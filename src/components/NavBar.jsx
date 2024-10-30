import { BsGithub, BsInstagram, BsLinkedin, BsTwitterX } from "react-icons/bs";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { HashLink } from "react-router-hash-link";

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-slate-500 bg-[#1e3a8a]/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly'>
			<HashLink
				smooth
				to='/#home'
				className='bg-gradient-to-r from-[#e9d7cc] to-[#fa7f77] bg-clip-text text-transparent opacity-90 font-semibold text-3xl transition-all duration-300 hover:opacity-100'
			>
				Josue
			</HashLink>

			<ul className='hidden md:flex gap-10'>
				<HashLink
					smooth
					to='/#home'
					className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
				>
					<li>Home</li>
				</HashLink>
				<HashLink
					smooth
					to='/#tech'
					className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
				>
					<li>Tech</li>
				</HashLink>
				<HashLink
					to='/#projects'
					className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
				>
					<li>Projects</li>
				</HashLink>
				<HashLink
					smooth
					to='/#contact'
					className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
				>
					<li>Contact</li>
				</HashLink>
			</ul>

			<ul className='hidden md:flex gap-5'>
				<li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:bg-gradient-to-b from-blue-800 to-pink-700 rounded-md hover:text-white'>
					<a href='https://www.instagram.com/joshcoder2000/' target='_blank'>
						<BsInstagram />
					</a>
				</li>
				<li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-white'>
					<a
						href='https://www.linkedin.com/in/josuedelossantos/'
						target='_blank'
					>
						<BsLinkedin />
					</a>
				</li>
				<li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-white'>
					<a href='https://x.com/joshcoder2000' target='_blank'>
						<BsTwitterX />
					</a>
				</li>
				<li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-white'>
					<a href='https://github.com/JosueDeLosSantos' target='_blank'>
						<BsGithub />
					</a>
				</li>
			</ul>

			{/* Add option for language */}

			{/* Mobile Menu */}

			{isOpen ? (
				<BiX className='block md:hidden text-4xl' onClick={toggleMenu} />
			) : (
				<BiMenu className='block md:hidden text-4xl' onClick={toggleMenu} />
			)}

			{isOpen && (
				<div
					className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-slate-500 bg-[#1e3a8a]/90 p-12 ${
						isOpen ? "block" : "hidden"
					}`}
					onClick={toggleMenu}
				>
					<ul className='flex flex-col gap-8'>
						<HashLink
							smooth
							to='/#home'
							className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
						>
							<li>Home</li>
						</HashLink>
						<HashLink
							smooth
							to='/#tech'
							className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
						>
							<li>Tech</li>
						</HashLink>
						<HashLink
							smooth
							to='/#projects'
							className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
						>
							<li>Projects</li>
						</HashLink>
						<HashLink
							smooth
							to='/#contact'
							className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
						>
							<li>Contact</li>
						</HashLink>
					</ul>
					<ul className='flex flex-wrap gap-5'>
						<li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100'>
							<a href='https://www.instagram.com/joshcoder2000/'>
								<BsInstagram />
							</a>
						</li>
						<li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100'>
							<a href='https://www.linkedin.com/in/josuedelossantos/'>
								<BsLinkedin />
							</a>
						</li>
						<li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100'>
							<a href='https://x.com/joshcoder2000'>
								<BsTwitterX />
							</a>
						</li>
						<li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-white-500'>
							<a href='https://github.com/JosueDeLosSantos'>
								<BsGithub />
							</a>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
}

export default NavBar;
