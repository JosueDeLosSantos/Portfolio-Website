import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Hero from "./components/Hero";
import Techs from "./components/Techs";
import Projects from "./components/Frameworks";
import Contact from "./components/Contact";
import Frameworks from "./components/Projects";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: (
            <>
              <Hero />
              <Techs />
              <Projects />
              <Contact />
            </>
          ),
        },
        { path: "/frameworks/:name", element: <Frameworks /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
