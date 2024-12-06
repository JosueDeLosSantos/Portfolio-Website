import {
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitterX,
  BsTranslate,
} from "react-icons/bs";
import { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavBar({ toggleLanguage, language }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-slate-500 bg-[#1e3a8a]/70 px-16 py-6 text-white backdrop-blur-md lg:justify-evenly">
      {/* large screens menu */}
      <Link
        to="/#home"
        className="bg-gradient-to-r from-[#e9d7cc] to-[#fa7f77] bg-clip-text text-transparent opacity-90 font-semibold text-3xl transition-all duration-300 hover:opacity-100"
      >
        Josue
      </Link>

      <ul className="hidden lg:flex gap-10">
        <Link
          to="/#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>
            {!language && "Home"}
            {language && "Inicio"}
          </li>
        </Link>
        <Link
          to="/#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>
            {" "}
            {!language && "Tech"}
            {language && "Tecnologías"}
          </li>
        </Link>
        <Link
          to="/#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>
            {" "}
            {!language && "Projects"}
            {language && "Proyectos"}
          </li>
        </Link>
        <Link
          to="/#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>
            {" "}
            {!language && "Contact"}
            {language && "Contacto"}
          </li>
        </Link>
      </ul>

      <ul className="hidden lg:flex gap-5">
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:bg-gradient-to-b from-blue-800 to-pink-700 rounded-md hover:text-white">
          <a
            href="https://www.instagram.com/joshcoder2000/"
            target="_blank"
            title="Instagram"
          >
            <BsInstagram />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-white">
          <a
            href="https://www.linkedin.com/in/josuedelossantos/"
            target="_blank"
            title="LinkedIn"
          >
            <BsLinkedin />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-white">
          <a
            href="https://x.com/joshcoder2000"
            target="_blank"
            title="TwitterX"
          >
            <BsTwitterX />
          </a>
        </li>
        <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-white">
          <a
            href="https://github.com/JosueDeLosSantos"
            target="_blank"
            title="Github"
          >
            <BsGithub />
          </a>
        </li>
        <li
          className="cursor-pointer text-xl opacity-70 transition-all duration-300 flex items-end gap-2"
          onClick={toggleLanguage}
          title="translate to English or Spanish"
        >
          <BsTranslate />
          <div className="text-xs">
            <span className={language ? "opacity-70" : "opacity-100"}>EN</span>
            {" / "}
            <span className={language ? "opacity-100" : "opacity-70"}>ES</span>
          </div>
        </li>
      </ul>

      {/* Mobile Menu */}

      {isOpen ? (
        <BiX className="block lg:hidden text-4xl" onClick={toggleMenu} />
      ) : (
        <BiMenu className="block lg:hidden text-4xl" onClick={toggleMenu} />
      )}

      {isOpen && (
        <div
          className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-slate-500 bg-[#1e3a8a]/90 p-12 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={toggleMenu}
        >
          <ul className="flex flex-col gap-8">
            <Link
              to="/#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>
                {" "}
                {!language && "Home"}
                {language && "Inicio"}
              </li>
            </Link>
            <Link
              to="/#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>
                {!language && "Tech"}
                {language && "Tecnologías"}
              </li>
            </Link>
            <Link
              to="/#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>
                {!language && "Projects"}
                {language && "Proyectos"}
              </li>
            </Link>
            <Link
              to="/#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>
                {!language && "Contact"}
                {language && "Contacto"}
              </li>
            </Link>
          </ul>
          <ul className="flex flex-wrap gap-5">
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100">
              <a href="https://www.instagram.com/joshcoder2000/">
                <BsInstagram />
              </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100">
              <a href="https://www.linkedin.com/in/josuedelossantos/">
                <BsLinkedin />
              </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100">
              <a href="https://x.com/joshcoder2000">
                <BsTwitterX />
              </a>
            </li>
            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-white-500">
              <a href="https://github.com/JosueDeLosSantos">
                <BsGithub />
              </a>
            </li>
          </ul>
          <div
            className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 hover:text-white-500 flex items-end gap-2"
            onClick={toggleLanguage}
          >
            <BsTranslate />
            <div className="text-xs">
              <span className={language ? "opacity-70" : "opacity-100"}>
                EN
              </span>
              {" / "}
              <span className={language ? "opacity-100" : "opacity-70"}>
                ES
              </span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

NavBar.propTypes = {
  toggleLanguage: PropTypes.func,
  language: PropTypes.bool,
};

export default NavBar;
