import image from "/foto-perfil.jpg";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import CV from "/JosueDeLosSantosCV.pdf";

function Hero() {
	return (
		<div
			id='home'
			className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'
		>
			<div className='flex flex-col items-center justify-center gap-10 text-white'>
				<motion.div
					initial={{ y: -50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					<img
						className='w-[250px] cursor-pointer rounded-full shadow-xl shadow-sky-700 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-sky-600'
						src={image}
						alt=''
					/>
				</motion.div>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'
				>
					<h1 className='bg-gradient-to-r from-[#e9d7cc] to-[#fa7f77] bg-clip-text text-transparent text-3xl md:text-5xl'>
						Josue De Los Santos
					</h1>
					<h3 className='bg-gradient-to-r from-[#fa7f77] to-[#e9d7cc] bg-clip-text text-transparent text-2xl font-light md:text-3xl'>
						{" "}
						Software Developer
					</h3>
					<p className='md:text-base text-pretty text-sm text-slate-200'>
						I’m a software developer skilled in React, TypeScript, JavaScript,
						CSS, and Tailwind CSS. I specialize in front-end design and have a
						knack for creating intuitive user interfaces. I excel at
						connecting apps with REST APIs and have strong knowledge of SQL
						and NoSQL databases. With over two years of experience, I’m
						passionate about building dynamic and responsive web applications.
					</p>
					<a href={CV} download={"JosueDeLosSantosCV.pdf"} className='mt-8'>
						<button
							type='button'
							className='flex gap-2 bg-[rgba(226,232,240,0.7)] text-[rgb(17,80,148)] px-3 py-1 rounded-full font-semibold transition-all duration-300 hover:scale-105'
						>
							<span>Download CV</span>
							<FaDownload className='size-5' />
						</button>
					</a>
				</motion.div>
			</div>
		</div>
	);
}

export default Hero;
