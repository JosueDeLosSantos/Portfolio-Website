import youtubeImage from "/youtubehomepage.jpg";
import abletonImage from "/Ableton.jpg";
import memoryGame from "/memory-game.png";
import cvBuilder from "/CV-builder-content.jpg";
import shoppingCart from "/shopping-cart.jpg";
import restaurantPage from "/Restaurant-page.jpg";
import weatherApp from "/weather-app.jpg";
import Battleship from "/Battleship.jpg";
import toDoList from "/to-do-list.jpg";

export const ReactProjects = [
	{
		image: shoppingCart,
		title: "Fictional Online Store",
		description:
			"This is a fictional online store. It features a responsive design and a cart system with Redux for managing cart items. Technologies used include Vite, React, TypeScript, and Tailwind CSS.",
		technologies: ["React", "TypeScript", "Tailwind"],
		link: "https://github.com/JosueDeLosSantos/shopping-cart-ts.git",
		view: "https://shopping-cart-ts-wine.vercel.app/"
	},
	{
		image: youtubeImage,
		title: "YouTube Home Page",
		description:
			"This project is a replica of the YouTube home page built with React, TypeScript, and Tailwind CSS. It showcases all the styles and animations of the original YouTube home page, providing a seamless and visually appealing user experience.",
		technologies: ["React", "TypeScript", "Tailwind"],
		link: "https://github.com/JosueDeLosSantos/youtube-home-page-react-ts-tailwind.git",
		view: "https://youtube-home-page-react-ts-tailwind.vercel.app/"
	},
	{
		image: abletonImage,
		title: "Ableton Home Page",
		description:
			"This project is a replica of the Ableton homepage, built with React, TypeScript, and Tailwind CSS. It faithfully recreates the styles of the original page, with extensive use of CSS Grid.",
		technologies: ["React", "TypeScript", "Tailwind"],
		link: "https://github.com/JosueDeLosSantos/Ableton-Website-Recreation.git",
		view: "https://ableton-website-recreation.vercel.app/"
	},
	{
		image: memoryGame,
		title: "Memory Game",
		description:
			"This project is a memory card game built with React and Vite. The goal of the game is to test and improve your memory by selecting cards only once.",
		technologies: ["JavaScript", "CSS", "HTML"],
		link: "https://github.com/JosueDeLosSantos/Memory-Card.git",
		view: "https://memory-card-gold.vercel.app/"
	},
	{
		image: cvBuilder,
		title: "CV Builder",
		description:
			"This project is my first React application, designed to help users create professional CVs. It uses Vite as the module bundler for a fast and efficient development experience.",
		technologies: ["JavaScript", "CSS", "HTML"],
		link: "https://github.com/JosueDeLosSantos/CV-builder.git",
		view: "https://cv-builder-vercel.vercel.app/"
	}
];

export const JavaScriptProjects = [
	{
		image: Battleship,
		title: "Battleship Game",
		description:
			"A classic Battleship game implemented in vanilla JavaScript, showcasing my skills in front-end development. This project utilizes Webpack as the module bundler to streamline the development process and manage dependencies efficiently.",
		technologies: ["JavaScript", "CSS"],
		link: "https://github.com/JosueDeLosSantos/Project-Battleship.git",
		view: "https://josuedelossantos.github.io/Project-Battleship/"
	},
	{
		image: weatherApp,
		title: "Weather App",
		description:
			"A dynamic weather application developed in vanilla JavaScript, leveraging Webpack as the module bundler for efficient dependency management. This app integrates with a weather API, allowing users to enter the name of any city worldwide to receive real-time weather information.",
		technologies: ["JavaScript", "CSS"],
		link: "https://github.com/JosueDeLosSantos/Weather-App.git",
		view: "https://josuedelossantos.github.io/Weather-App/"
	},

	{
		image: toDoList,
		title: "TO-DO List",
		description:
			"A feature-rich to-do list application crafted in vanilla JavaScript, demonstrating extensive use of the DOM and localStorage for a seamless user experience. This app allows users to create, edit, and delete tasks, with all data persistently stored in the browser’s localStorage.",
		technologies: ["JavaScript", "CSS"],
		link: "https://github.com/JosueDeLosSantos/Todo-List.git",
		view: "https://josuedelossantos.github.io/Todo-List/"
	},
	{
		image: restaurantPage,
		title: "Restaurant Page",
		description:
			"A visually appealing restaurant page built with vanilla JavaScript and CSS, showcasing my front-end development skills.",
		technologies: ["JavaScript", "CSS"],
		link: "https://github.com/JosueDeLosSantos/Project-Restaurant-Page.git",
		view: "https://josuedelossantos.github.io/Project-Restaurant-Page/"
	}
];
