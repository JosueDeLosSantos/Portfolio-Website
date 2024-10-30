import PropTypes from "prop-types";
import { motion } from "framer-motion";
import youtubeImage from "/youtubehomepage.jpg";
import abletonImage from "/Ableton.jpg";
import memoryGame from "/memory-game.png";
import cvBuilder from "/CV-builder-content.jpg";
import shoppingCart from "/shopping-cart.jpg";

const projects = [
	{
		image: shoppingCart,
		title: "Fictional Online Store",
		description:
			"This is a fictional online store. It features a responsive design and a cart system with Redux for managing cart items. Technologies used include Vite, React, TypeScript, and Tailwind CSS.",
		technologies: ["React", "TypeScript", "Tailwind"],
		link: "https://github.com/JosueDeLosSantos/shopping-cart-ts.git",
		view: "https://shopping-cart-ts-wine.vercel.app/"
	},
	{
		image: youtubeImage,
		title: "YouTube Home Page",
		description:
			"This project is a replica of the YouTube home page built with React, TypeScript, and Tailwind CSS. It showcases all the styles and animations of the original YouTube home page, providing a seamless and visually appealing user experience.",
		technologies: ["React", "TypeScript", "Tailwind"],
		link: "https://github.com/JosueDeLosSantos/youtube-home-page-react-ts-tailwind.git",
		view: "https://youtube-home-page-react-ts-tailwind.vercel.app/"
	},
	{
		image: abletonImage,
		title: "Ableton Home Page",
		description:
			"This project is a replica of the Ableton homepage, built with React, TypeScript, and Tailwind CSS. It faithfully recreates the styles of the original page, with extensive use of CSS Grid.",
		technologies: ["React", "TypeScript", "Tailwind"],
		link: "https://github.com/JosueDeLosSantos/Ableton-Website-Recreation.git",
		view: "https://ableton-website-recreation.vercel.app/"
	},
	{
		image: memoryGame,
		title: "Memory Game",
		description:
			"This project is a memory card game built with React and Vite. The goal of the game is to test and improve your memory by selecting cards only once.",
		technologies: ["JavaScript", "CSS", "HTML"],
		link: "https://github.com/JosueDeLosSantos/Memory-Card.git",
		view: "https://memory-card-gold.vercel.app/"
	},
	{
		image: cvBuilder,
		title: "CV Builder",
		description:
			"This project is my first React application, designed to help users create professional CVs. It uses Vite as the module bundler for a fast and efficient development experience.",
		technologies: ["JavaScript", "CSS", "HTML"],
		link: "https://github.com/JosueDeLosSantos/CV-builder.git",
		view: "https://cv-builder-vercel.vercel.app/"
	}
];

const ScrollReveal = ({ children }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 100 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.8 }}
		>
			{children}
		</motion.div>
	);
};

const ProjectCard = ({ project }) => {
	return (
		<ScrollReveal>
			<div className='flex flex-col max-w-11/12 justify-center gap-8'>
				<div className='w-full cursor-pointer'>
					<a href={project.view} target='_blank'>
						<img
							src={project.image}
							alt=''
							className='rounded-2xl w-full object-contain transition-all duration-300 hover:scale-105'
						/>
					</a>
				</div>

				<div className='flex flex-col gap-5'>
					<div className='flex flex-col gap-3'>
						<div className='text-xl font-semibold'>{project.title}</div>
						<div className='text-slate-200'>{project.description}</div>
					</div>
					<div className='flex flex-wrap gap-5'>
						<a href={project.link} target='_blank' className='cursor-pointer'>
							<span className='rounded-lg bg-black py-1 px-3'>Code</span>
						</a>
						<a href={project.view} target='_blank' className='cursor-pointer'>
							<span className='rounded-lg bg-black py-1 px-3'>
								View Live
							</span>
						</a>
					</div>
				</div>
			</div>
		</ScrollReveal>
	);
};

function Projects() {
	return (
		<div
			id='projects'
			className='flex min-h-screen w-full flex-col items-center justify-center gap-28 px-8 py-32'
		>
			<ScrollReveal>
				<h1 className='text-[9vw] font-light text-white sm:text-6xl'>
					React Projects
				</h1>
			</ScrollReveal>
			<div className='flex flex-col w-full max-w-[1000px] sm:grid sm:grid-cols-3 text-white sm:gap-16'>
				{projects.map((project, index) => (
					<ProjectCard key={index} project={project} />
				))}
			</div>
		</div>
	);
}

export default Projects;

ScrollReveal.propTypes = {
	children: PropTypes.node
};

ProjectCard.propTypes = {
	project: PropTypes.object
};
