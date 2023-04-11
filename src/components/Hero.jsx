import Typewriter from "typewriter-effect";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Hero = () => {
	return (
		<section className="animate-fadeIn h-screen flex items-center md:justify-center">
			<div className="text-2xl">
				<h1 className="text-7xl my-8 md:text-8xl">
					<h1 className="text-cyan-400">Hello, my name is</h1>
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.pasteString("your name")
								.pauseFor(2000)
								.changeDeleteSpeed(10)
								.deleteChars(8)
								.typeString("Markus Kojo")
								.start();
						}}
					/>
				</h1>
				<div className="flex justify-evenly my-9 text-5xl items-center">
					<a
						title="GitHub profile"
						href="https://github.com/wumpfroot"
						className="cursor-pointer"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AiOutlineGithub />
					</a>
					<a
						title="LinkedIn profile"
						href="https://www.linkedin.com/in/markus-kojo/"
						className="cursor-pointer"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AiOutlineLinkedin />
					</a>
					<a
						className="text-cyan-400 text-3xl"
						href="./files/CV2023.pdf"
						download
					>
						download resume
					</a>
				</div>
				<p className="mb-4">
					Frontend developer, born in{" "}
					<span className="text-blue-400">Finland</span>. Located in{" "}
					<span className="text-red-500">Manchester</span>, UK.
				</p>
				<p>Take a look at my projects and what I can offer below</p>
			</div>
		</section>
	);
};
export default Hero;
