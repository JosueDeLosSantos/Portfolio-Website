import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import useSanityClient from "../hooks/useSanityClient";
import imageLoader from "../utils/imageLoader";
import useTranslation from "../hooks/useTranslation";

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

function Projects({ language }) {
  const frameworksQuery = `*[_type == "framework"]`;
  const frameworks = useSanityClient(frameworksQuery);

  return (
    <div
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 md:gap-28 pt-32 px-4 md:px-8 md:py-24"
    >
      <h1 className="text-4xl font-light text-white md:text-5xl">
        {!language && "Projects"}
        {language && "Proyectos"}
      </h1>

      <ScrollReveal>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-10">
          {/* framework cards */}
          {frameworks &&
            frameworks.map((framework) => {
              const frameworkImage = imageLoader(framework, 250, 250);

              return (
                <div
                  key={framework._id}
                  className="flex flex-col h-full gap-20 md:flex-row md:gap-10 rounded-2xl bg-[rgba(3,105,161,0.5)] p-2 transition-all duration-300 hover:scale-105"
                >
                  <Link
                    to={`/frameworks/${framework.name}`}
                    state={{
                      description: framework.description,
                    }}
                    onClick={() =>
                      window.scroll({ top: 0, behavior: "instant" })
                    }
                  >
                    <FramworkCard
                      frameworkImage={frameworkImage}
                      framework={framework}
                      language={language}
                    />
                  </Link>
                </div>
              );
            })}
        </div>
      </ScrollReveal>
    </div>
  );
}

function FramworkCard({ frameworkImage, framework, language }) {
  // Translation
  const spanishDescription = useTranslation(framework.description);

  return (
    <div className="flex flex-col max-w-[200px] justify-center gap-8">
      <div className="w-full">
        <img
          src={frameworkImage}
          alt={`Image of ${framework.name}`}
          className="rounded-2xl w-full object-contain"
          width={250}
          height={250}
        />
      </div>

      <div className="flex flex-col gap-5 text-center">
        <div className="flex flex-col gap-3 tracking-wide">
          <div className="text-xl font-semibold text-white">
            {framework.name}
          </div>
          <div className="text-slate-200 line-clamp-6">
            {!language && framework.description}
            {language &&
              spanishDescription === undefined &&
              framework.description}
            {language && spanishDescription}
          </div>
        </div>
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

FramworkCard.propTypes = {
  frameworkImage: PropTypes.string,
  framework: PropTypes.object,
  language: PropTypes.bool,
};
