import image from "/foto-perfil.jpg";
import { motion } from "framer-motion";

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
						className='w-[300px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl md:w-[350px] hover:shadow-indigo-600'
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
					<h1 className='bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-5xl font-light md:text-7xl'>
						Josue De Los Santos
					</h1>
					<h3 className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl font-light md:text-3xl'>
						{" "}
						Web Developer
					</h3>
					<p className='md:text-base text-pretty text-sm text-gray-400'>
						I’m a web developer skilled in React, TypeScript, JavaScript, CSS,
						and Tailwind CSS. I specialize in front-end design and have a
						knack for creating intuitive user interfaces. I excel at
						connecting apps with REST APIs and have strong knowledge of SQL
						and NoSQL databases. With over two years of experience, I’m
						passionate about building dynamic and responsive web applications.
					</p>
				</motion.div>
			</div>
		</div>
	);
}

export default Hero;
