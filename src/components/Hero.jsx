import Typewriter from "typewriter-effect";

const Hero = () => {
	return (
		<section className="animate-fadeIn">
			<div className="text-xl">
				<h1 className="text-4xl my-8">
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
				<p>Frontend developer, born in Finland. Located in Manchester, UK.</p>
				<p>
					Take a look at my projects and what I can offer below and take a look
					at my{" "}
					<a href="../assets/CV2022.pdf" download>
						resume
					</a>
				</p>
			</div>
		</section>
	);
};
export default Hero;
