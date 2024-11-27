import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import reactImage from "/react-logo.jfif";
import javascriptImage from "/javascript-logo.jfif";
import { ReactProjects, JavaScriptProjects } from "../Data/projects.js";

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
      id="projects"
      className="flex min-h-screen w-full flex-col items-center justify-center gap-16 md:gap-28 pt-32 px-4 md:px-8 md:py-24"
    >
      <h1 className="text-4xl font-light text-white md:text-6xl">
        My Projects
      </h1>

      <ScrollReveal>
        <div className="flex flex-col sm:grid sm:grid-cols-2 gap-10">
          {/* javaScript */}
          <div className="flex flex-col h-full gap-20 md:flex-row md:gap-10 rounded-2xl bg-[rgba(3,105,161,0.5)] p-2 transition-all duration-300 hover:scale-105">
            <Link
              to="/JavaScript-Projects"
              onClick={() => window.scroll({ top: 0, behavior: "instant" })}
            >
              <div className="flex flex-col max-w-[200px] justify-center gap-8">
                <div className="w-full">
                  <img
                    src={javascriptImage}
                    alt=""
                    className="rounded-2xl w-full object-contain"
                  />
                </div>

                <div className="flex flex-col gap-5 text-center">
                  <div className="flex flex-col gap-3">
                    <div className="text-xl font-semibold text-white">
                      JavaScript
                    </div>
                    <div className="text-slate-200">
                      {/* {`This collection showcases ${JavaScriptProjects.length}  vanilla JavaScript projects, including a Battleship Game, a Weather App, a To-Do List, and a Restaurant Page.`} */}
                      This is a collection of my earliest JavaScript projects,
                      which mark the beginning of my journey into the world of
                      programming.
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* React */}
          <div className="flex flex-col h-full gap-20 md:flex-row md:gap-10 rounded-2xl bg-[rgba(3,105,161,0.5)] p-2 transition-all duration-300 hover:scale-105">
            <Link
              to="/React-Projects"
              onClick={() => window.scroll({ top: 0, behavior: "instant" })}
            >
              <div className="flex flex-col max-w-[200px] justify-center gap-8">
                <div className="w-full">
                  <img
                    src={reactImage}
                    alt=""
                    className="rounded-2xl w-full object-contain"
                  />
                </div>

                <div className="flex flex-col gap-5 text-center">
                  <div className="flex flex-col gap-3">
                    <div className="text-xl font-semibold text-white">
                      React
                    </div>
                    <div className="text-slate-200">
                      {/* {`Explore ${ReactProjects.length} React projects showcasing my ability to create dynamic, responsive, and user-friendly interfaces.`} */}
                      After gaining a solid understanding of JavaScript, I
                      ventured into using React, a powerful JavaScript
                      framework.
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default Projects;

ScrollReveal.propTypes = {
  children: PropTypes.node,
};
