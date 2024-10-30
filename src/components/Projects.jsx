import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

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

function Projects() {
	return (
		<div
			id='projects'
			className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-8 md:py-24'
		>
			<h1 className='text-4xl font-light text-white md:text-6xl'>My Projects</h1>

			<ScrollReveal>
				<Link
					to='/React-Projects'
					onClick={() => window.scroll({ top: 0, behavior: "instant" })}
				>
					<button className='rounded-lg bg-black p-3 text-white'>
						React Projects
					</button>
				</Link>
			</ScrollReveal>
		</div>
	);
}

export default Projects;

ScrollReveal.propTypes = {
	children: PropTypes.node
};
