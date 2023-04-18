import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/projects/Projects";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Divider from "./components/PageDivider/Divider";

function App() {
	return (
		<div className="App">
			<main>
				<Navbar />
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Contact />
			</main>
		</div>
	);
}

export default App;
