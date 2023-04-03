import Typewriter from "typewriter-effect";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Hero = () => {
	return (
		<section className="animate-fadeIn h-screen flex items-center md:justify-center">
			<div className="text-2xl">
				<h1 className="text-7xl my-8 md:text-8xl">
					Hello, my name is
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
				<div className="flex justify-evenly my-9 text-5xl md:justify-start">
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
				</div>
				<p className="mb-4">
					Frontend developer, born in Finland. Located in Manchester, UK.
				</p>
				<p>
					Take a look at my projects and what I can offer below and take a look
					at my{" "}
					<a
						className="text-cyan-400 font-bold"
						href="../assets/CV2022.pdf"
						download
					>
						resume
					</a>
				</p>
			</div>
		</section>
	);
};
export default Hero;
