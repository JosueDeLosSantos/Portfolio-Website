import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { ReactProjects } from "../Data/projects.js";

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
			<div className='flex flex-col h-full max-w-11/12 gap-8 rounded-xl bg-[rgba(3,105,161,0.5)] pt-2 px-2 pb-4 transition-all duration-300 hover:scale-105'>
				<div className='w-full cursor-pointer'>
					<a href={project.view} target='_blank'>
						<img
							src={project.image}
							alt=''
							className='rounded w-full object-contain'
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
			className='flex min-h-screen w-full flex-col items-center justify-center gap-14 sm:gap-28 px-4 py-32'
		>
			<ScrollReveal>
				<h1 className='text-[9vw] font-light text-white sm:text-6xl'>
					React Projects
				</h1>
			</ScrollReveal>
			<div className='flex flex-col size-full max-w-[1000px] sm:grid sm:grid-cols-2 lg:grid-cols-3 text-white gap-20 sm:gap-16'>
				{ReactProjects.map((project, index) => (
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
