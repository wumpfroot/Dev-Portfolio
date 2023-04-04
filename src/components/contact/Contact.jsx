import Form from "./Form";
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Contact = () => {
	return (
		<div id="contact" className="flex flex-col justify-center p-5 h-screen">
			<h2 className="text-5xl">Contact me</h2>
			<p className="md:text-lg">
				Any questions, feedback? Or just know where to reach me?
			</p>
			<p className="mb-2 md:text-lg">Use these links</p>
			<div className="text-4xl flex">
				<a
					title="GitHub Profile"
					href="https://github.com/wumpfroot"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiOutlineGithub />
				</a>
				<a
					title="LinkedIn Profile"
					href="https://www.linkedin.com/in/markus-kojo/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<AiOutlineLinkedin />
				</a>
			</div>
			<p className="my-5 md:text-lg">
				Or use the contact form below to send me a message
			</p>
			<Form />
		</div>
	);
};
export default Contact;
