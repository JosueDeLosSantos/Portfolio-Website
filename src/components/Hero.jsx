import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import useSanityClient from "../hooks/useSanityClient";
import imageLoader from "../utils/imageLoader";
import useTranslation from "../hooks/useTranslation";
import PropTypes from "prop-types";

function Hero({ language }) {
  const profileQuery = `*[_type == "profile"]{..., "cvUrl": cv.asset->url, "spanishCvUrl": spanishCv.asset->url}`;
  const profile = useSanityClient(profileQuery);
  const profileImgUrl = imageLoader(profile, 250, 250);
  // Translations
  const spanishDescription = useTranslation(profile?.description);
  const spanishTitle = useTranslation(profile?.title);

  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img
            className="cursor-pointer rounded-full shadow-xl shadow-sky-700 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-sky-600"
            src={profileImgUrl}
            alt="Profile Image"
            width={250}
            height={250}
          />
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="bg-gradient-to-r from-[#e9d7cc] to-[#fa7f77] bg-clip-text text-transparent text-3xl md:text-5xl">
            {profile?.name}
          </h1>
          <h3 className="bg-gradient-to-r from-[#fa7f77] to-[#e9d7cc] bg-clip-text text-transparent text-2xl font-light md:text-3xl">
            {" "}
            {!language && profile?.title}
            {language && spanishTitle === undefined && profile?.title}
            {language && spanishTitle}
          </h3>
          <p className="md:text-base text-pretty text-sm text-slate-200 tracking-wide">
            {!language && profile?.description}
            {language &&
              spanishDescription === undefined &&
              profile?.description}
            {language && spanishDescription}
          </p>
          <a
            href={
              !language
                ? `${profile?.cvUrl}?dl=JosueDeLosSantosCV.pdf`
                : `${profile?.spanishCvUrl}?dl=JosueSpanishCV.pdf`
            }
            download={"JosueDeLosSantosCV.pdf"}
            className="mt-8"
          >
            <button
              type="button"
              className="flex gap-2 bg-[rgba(226,232,240,0.7)] text-[rgb(17,80,148)] px-3 py-1 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              {!language && <span>Download CV</span>}
              {language && <span>Descargar CV</span>}
              <FaDownload className="size-5" />
            </button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}

Hero.propTypes = {
  language: PropTypes.bool,
};

export default Hero;
