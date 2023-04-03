import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/projects/Projects";
import About from "./components/About";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";

function App() {
	return (
		<div className="App">
			<main className="p-4">
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
