import { useState } from "react";
import { CgSpinner } from "react-icons/cg";
import PropTypes from "prop-types";

function Contact({ language }) {
  const [waiting, setWaiting] = useState(false);

  function openEmailApp() {
    setWaiting(true);
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(setWaiting(false));
      }, 5000); // Wait for 5 seconds
    });
  }

  return (
    <div
      id="contact"
      className="flex min-h-screen items-center justify-center mt-32"
    >
      <div className="flex flex-col items-center justify-center gap-3 space-y-6">
        <h1 className="text-center text-5xl md:text-7xl">
          <span className="bg-gradient-to-r from-[#e9d7cc] to-[#fa7f77] bg-clip-text text-transparent">
            {!language && "Get in Touch"}
            {language && "Contáctame"}
          </span>
        </h1>

        <p className="text-center text-lg font-semibold text-slate-200 tracking-wide">
          {!language &&
            "Do you want to get in touch? Send me an E-mail through this button and I will get back to you as soon as possible."}
          {language &&
            "Quieres ponerte en contacto? Envíame un correo electrónico a través de este botón y te responderé lo antes posible."}
        </p>

        <a
          href="mailto:joshcoder2000@gmail.com"
          className={`text-nowrap rounded-lg border border-sky-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-sky-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-600 ${
            waiting && "hidden"
          }`}
          onClick={() => openEmailApp()}
        >
          {!language && "Contact Me"}
          {language && "Contactar"}
        </a>

        {waiting && (
          <div className="flex items-center justify-center">
            <CgSpinner className="animate-spin text-4xl text-sky-600" />
          </div>
        )}
      </div>
    </div>
  );
}

Contact.propTypes = {
  language: PropTypes.bool,
};

export default Contact;
