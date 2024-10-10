import { BsGithub, BsLinkedin, BsTwitterX, BsYoutube } from "react-icons/bs";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";

function NavBar() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly'>
			<a
				href='#home'
				className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 font-semibold text-3xl transition-all duration-300 hover:opacity-100'
			>
				Josue
			</a>

			<ul className='hidden md:flex gap-10'>
				<a
					href='#home'
					className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
				>
					<li>Home</li>
				</a>
				<a
					href='#tech'
					className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
				>
					<li>Tech</li>
				</a>
				<a
					href='#Projects'
					className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
				>
					<li>Projects</li>
				</a>
				<a
					href='#Contact'
					className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
				>
					<li>Contact</li>
				</a>
			</ul>

			<ul className='hidden md:flex gap-5'>
				<li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-red-500'>
					<BsYoutube />
				</li>
				<li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-500'>
					<BsLinkedin />
				</li>
				<li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-sky-500'>
					<BsTwitterX />
				</li>
				<li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-white-500'>
					<BsGithub />
				</li>
			</ul>

			{isOpen ? (
				<BiX className='block md:hidden text-4xl' onClick={toggleMenu} />
			) : (
				<BiMenu className='block md:hidden text-4xl' onClick={toggleMenu} />
			)}

			{isOpen && (
				<div
					className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${
						isOpen ? "block" : "hidden"
					}`}
				>
					<ul className='flex flex-col gap-8'>
						<a
							href='#home'
							className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
						>
							<li>Home</li>
						</a>
						<a
							href='#tech'
							className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
						>
							<li>Tech</li>
						</a>
						<a
							href='#Projects'
							className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
						>
							<li>Projects</li>
						</a>
						<a
							href='#Contact'
							className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'
						>
							<li>Contact</li>
						</a>
					</ul>
					<ul className='flex flex-wrap gap-5'>
						<li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-red-500'>
							<BsYoutube />
						</li>
						<li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-500'>
							<BsLinkedin />
						</li>
						<li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-sky-500'>
							<BsTwitterX />
						</li>
						<li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-white-500'>
							<BsGithub />
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
}

export default NavBar;
