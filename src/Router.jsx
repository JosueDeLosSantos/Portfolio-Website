import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Hero from "./components/Hero";
import Techs from "./components/Techs";
import Frameworks from "./components/Frameworks";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import { useState } from "react";

const Router = () => {
  const [language, setLanguage] = useState(false);
  function toggleLanguage() {
    setLanguage(!language);
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App language={language} toggleLanguage={toggleLanguage} />,
      children: [
        {
          index: true,
          element: (
            <>
              <Hero language={language} />
              <Techs language={language} />
              <Frameworks language={language} />
              <Contact language={language} />
            </>
          ),
        },
        {
          path: "/frameworks/:name",
          element: <Projects language={language} />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
