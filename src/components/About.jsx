import { motion } from "framer-motion";

const About = () => {
	return (
		<section id="about" className="grid content-center text-center py-16 px-5">
			<motion.div
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
			>
				<h1 className="text-7xl">About</h1>
				<p className="text-xl md:text-3xl">
					Frontend developer with an eye for visually beautiful websites that
					scale to all devices. Always excited to learn something new and keep
					up with new technologies. I am always open for job opportunities that
					allow me to learn and grow as a developer, so feel free to contact me.
					Along with coding, music and video games are close to my heart.
				</p>
			</motion.div>
		</section>
	);
};
export default About;
