import PropTypes from "prop-types";
import { motion } from "framer-motion";
import youtubeImage from "/youtubehomepage.jpg";
import abletonImage from "/Ableton.jpg";
import blogCMS from "/main-screen-dark.jpg";
import memoryGame from "/memory-game.png";
import cvBuilder from "/CV-builder-content.jpg";

const projects = [
	{
		image: youtubeImage,
		title: "YouTube Home Page",
		description:
			"This project is a replica of the YouTube home page built with React, TypeScript, and Tailwind CSS. It showcases all the styles and animations of the original YouTube home page, providing a seamless and visually appealing user experience.",
		technologies: ["React", "TypeScript", "Tailwind"],
		link: "https://github.com/JosueDeLosSantos/youtube-home-page-react-ts-tailwind.git"
	},
	{
		image: abletonImage,
		title: "Ableton Home Page",
		description:
			"This project is a replica of the Ableton homepage, built with React, TypeScript, and Tailwind CSS. It faithfully recreates the styles of the original page, with extensive use of CSS Grid.",
		technologies: ["React", "TypeScript", "Tailwind"],
		link: "https://github.com/JosueDeLosSantos/Ableton-Website-Recreation.git"
	},
	{
		image: blogCMS,
		title: "Blog CMS",
		description:
			"This is my first full stack project where I applied all the concepts I’ve learned as a web developer so far. It showcases my journey and growth as a developer. The blog features a custom-built CMS, responsive design, and various interactive elements. Technologies used include HTML, CSS, Tailwind CSS, TypeScript, React, Redux, Node.js, Express, MongoDB, and multiple libraries.",
		technologies: ["React", "TypeScript", "Tailwind", "Express", "MongoDB"],
		link: "https://github.com/JosueDeLosSantos/blog-api-admin-page.git"
	},
	{
		image: memoryGame,
		title: "Memory Game",
		description:
			"This project is a memory card game built with React and Vite. The goal of the game is to test and improve your memory by selecting cards only once.",
		technologies: ["JavaScript", "CSS", "HTML"],
		link: "https://github.com/JosueDeLosSantos/Memory-Card.git"
	},
	{
		image: cvBuilder,
		title: "CV Builder",
		description:
			"This project is my first React application, designed to help users create professional CVs. It uses Vite as the module bundler for a fast and efficient development experience.",
		technologies: ["JavaScript", "CSS", "HTML"],
		link: "https://github.com/JosueDeLosSantos/CV-builder.git"
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

const ProjectCard = ({ key, project }) => {
	return (
		<ScrollReveal>
			<a href={project.link} target='_blank' className='cursor-pointer'>
				<div
					key={key}
					className='flex flex-col items-center justify-center gap-8 md:flex-row md:gap-24'
				>
					<img
						src={project.image}
						alt=''
						className='cursor-pointer w-full rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px]'
					/>
					<div className='flex flex-col gap-5'>
						<div className='flex flex-col gap-3'>
							<div className='text-xl font-semibold'>{project.title}</div>
							<div className='text-slate-200'>{project.description}</div>
						</div>
						<div className='flex flex-wrap gap-5'>
							{project.technologies.map((technology, index) => (
								<span key={index} className='rounded-lg bg-black p-3'>
									{technology}
								</span>
							))}
						</div>
					</div>
				</div>
			</a>
		</ScrollReveal>
	);
};

function Projects() {
	return (
		<div
			id='projects'
			className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'
		>
			<ScrollReveal>
				<h1 className='text-4xl font-light text-white md:text-6xl'>
					My Projects
				</h1>
			</ScrollReveal>
			<div className='flex w-full max-w-[1000px] flex-col text-white gap-16'>
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
	project: PropTypes.object,
	key: PropTypes.number
};
