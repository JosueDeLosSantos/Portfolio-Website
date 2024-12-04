import PropTypes from "prop-types";
import { motion } from "framer-motion";
import imageLoader from "../utils/imageLoader.js";
import useSanityClient from "../hooks/useSanityClient.js";
import { useParams, useLocation } from "react-router-dom";
import { DateTime } from "luxon";
import { FaGithub } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import useTranslation from "../hooks/useTranslation.js";

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

const ProjectCard = ({ project, language }) => {
  const projectImage = imageLoader(project);
  // const date = moment(project.endDate).format("MMM YYYY");
  const rawDate = DateTime.fromISO(project.endDate);
  const date = rawDate.toLocaleString({ month: "short", year: "numeric" });
  const spanishDate = rawDate
    .setLocale("es")
    .toLocaleString({ month: "short", year: "numeric" });
  // Translations
  const spanishDescription = useTranslation(project.description);
  const spanishName = useTranslation(project.name);

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
          <p className="">
            {!language && date} {language && spanishDate}
          </p>
        </div>

        <div className="flex flex-col gap-5 mb-8">
          {/* title and description */}
          <div className="flex flex-col gap-3 tracking-wide">
            <div className="text-xl font-semibold">
              {!language && project.name}
              {language && spanishName === undefined && project.name}
              {language && spanishName}
            </div>
            <div className="text-slate-200 text-sm">
              {!language && project.description}
              {language &&
                spanishDescription === undefined &&
                project.description}
              {language && spanishDescription}
            </div>
          </div>
          {/* technologies tags */}
          <div
            className="flex flex-wrap gap-2"
            title={
              language
                ? "Tecnologías usadas en este proyecto"
                : "Technologies used in this project"
            }
          >
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
              <span>
                {!language && "Code"}
                {language && "Código"}
              </span>
            </button>
          </a>
          <a
            href={project.livePreview}
            target="_blank"
            className="cursor-pointer"
          >
            <button className=" text-[#e2e8f0e6] font-['Inter'] flex gap-1 items-start hover:underline">
              <FaGlobe className="text-lg" />
              <span>
                {!language && "View Live"}
                {language && "Ver en línea"}
              </span>
            </button>
          </a>
        </div>
      </div>
    </ScrollReveal>
  );
};

function Projects({ language }) {
  const location = useLocation();
  const { name } = useParams(); // framework name
  const { description } = location.state;
  const spanishDescription = useTranslation(description);
  const frameworkQuery = `*[_type == "project" && framework->name == "${name}"] | order(endDate desc) {..., endDate}`;
  const projects = useSanityClient(frameworkQuery);
  const singleProject = Array.isArray(projects) ? null : projects;

  return (
    <div
      id="projects"
      className="flex min-h-full w-full flex-col items-center justify-center gap-14 sm:gap-28 px-4 py-32"
    >
      <ScrollReveal>
        <h1 className="text-[9vw] font-light text-white sm:text-6xl">
          {!language && `${name} Projects`}
          {language && `Proyectos de ${name} `}
        </h1>
      </ScrollReveal>
      <ScrollReveal>
        <div className="max-w-[1000px] text-lg text-slate-200 font-['Inter']">
          <p>
            {!language && description}
            {language && typeof spanishDescription !== "string" && description}
            {language &&
              typeof spanishDescription === "string" &&
              spanishDescription}
          </p>
        </div>
      </ScrollReveal>

      <div className="flex flex-col size-full max-w-[1000px] sm:grid sm:grid-cols-2 lg:grid-cols-3 text-white gap-20 sm:gap-16">
        {projects?.length &&
          projects.map((project) => (
            <ProjectCard
              key={project._id}
              project={project}
              language={language}
            />
          ))}
        {singleProject && (
          <ProjectCard project={singleProject} language={language} />
        )}
      </div>
    </div>
  );
}

export default Projects;

ScrollReveal.propTypes = {
  children: PropTypes.node,
};

Projects.propTypes = {
  language: PropTypes.bool,
};

ProjectCard.propTypes = {
  project: PropTypes.object || PropTypes.array,
  language: PropTypes.bool,
};
