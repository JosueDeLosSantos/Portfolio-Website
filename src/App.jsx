import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Techs from "./components/Techs";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
	return (
		<>
			<div className='fixed -z-10 min-h-screen w-full [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]'></div>
			<main className='flex flex-col items-center px-4 md:px-8 lg:px-16'>
				<NavBar />
				<Hero />
				<Techs />
				<Projects />
				<Contact />
			</main>
		</>
	);
}

export default App;
