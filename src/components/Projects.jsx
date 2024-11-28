import PropTypes from "prop-types";
import { motion } from "framer-motion";
import imageLoader from "../utils/imageLoader.js";
import useSanityClient from "../hooks/useSanityClient.js";
import { useParams, useLocation } from "react-router-dom";
import moment from "moment";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

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
  const projectImage = imageLoader(project);
  const date = moment(project.endDate).format("MMM YYYY");

  return (
    <ScrollReveal>
      <div className="flex flex-col h-full max-w-11/12 rounded-xl bg-[rgba(3,105,161,0.5)] pt-2 px-2 pb-4 transition-all duration-300 hover:scale-105">
        {/* image */}
        <div className="w-full cursor-pointer mb-5">
          <a href={project.livePreview} target="_blank">
            <img
              src={projectImage || "https://placehold.co/275x220/png"}
              alt=""
              className="rounded w-full object-contain"
              width={275}
              height={220}
            />
          </a>
        </div>
        {/* date */}
        <div className="text-[#e2e8f0e6] mb-5 border border-[#e2e8f066] py-1 px-2 rounded-full text-xs font-['Inter'] bg-[#e2e8f033] w-fit">
          <p className="">{date}</p>
        </div>

        <div className="flex flex-col gap-5 mb-8">
          {/* title and description */}
          <div className="flex flex-col gap-3 tracking-wide">
            <div className="text-xl font-semibold">{project.name}</div>
            <div className="text-slate-200 text-sm">{project.description}</div>
          </div>
          {/* technologies tags */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tag) => (
              <div
                key={tag}
                className="py-1 px-2 rounded text-xs font-['Inter'] bg-black"
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        {/* links */}
        <div className="flex flex-wrap gap-8">
          <a
            href={project.githubLink}
            target="_blank"
            className="cursor-pointer"
          >
            <button className=" text-[#e2e8f0e6] font-['Inter'] flex gap-1 items-start hover:underline">
              <FaGithub className="text-lg" />
              <span>Code</span>
            </button>
          </a>
          <a
            href={project.livePreview}
            target="_blank"
            className="cursor-pointer"
          >
            <button className=" text-[#e2e8f0e6] font-['Inter'] flex gap-1 items-start hover:underline">
              <FaGlobe className="text-lg" />
              <span>View Live</span>
            </button>
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

function Projects() {
  const location = useLocation();
  const { name } = useParams(); // framework name
  const { description } = location.state;
  const frameworkQuery = `*[_type == "project" && framework->name == "${name}"] | order(endDate desc) {..., endDate}`;
  const projects = useSanityClient(frameworkQuery);
  const singleProject = Array.isArray(projects) ? null : projects;
  // if (projects?.length) {
  //   console.log(projects[0].technologies);
  // }

  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-14 sm:gap-28 px-4 py-32"
    >
      <ScrollReveal>
        <h1 className="text-[9vw] font-light text-white sm:text-6xl">
          {`${name} Projects`}
        </h1>
      </ScrollReveal>
      <ScrollReveal>
        <div className="max-w-[1000px] text-lg text-slate-200 font-['Inter']">
          <p>{description}</p>
        </div>
      </ScrollReveal>

      <div className="flex flex-col size-full max-w-[1000px] sm:grid sm:grid-cols-2 lg:grid-cols-3 text-white gap-20 sm:gap-16">
        {projects?.length &&
          projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        {singleProject && <ProjectCard project={singleProject} />}
      </div>
    </div>
  );
}

export default Projects;

ScrollReveal.propTypes = {
  children: PropTypes.node,
};

ProjectCard.propTypes = {
  project: PropTypes.object || PropTypes.array,
};
