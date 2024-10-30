import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ReactProjects from "./pages/ReactProjects";
import Hero from "./components/Hero";
import Techs from "./components/Techs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

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
					)
				},
				{ path: "React-Projects", element: <ReactProjects /> }
			]
		}
	]);
	return <RouterProvider router={router} />;
};

export default Router;
