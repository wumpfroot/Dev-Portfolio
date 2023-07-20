import DividerBottom from "../PageDivider/DividerBottom";
import Form from "./Form";
import { AiOutlineLinkedin } from "react-icons/ai";

const Contact = () => {
	return (
		<div className="relative">
			<div id="contact" className="flex flex-col justify-center items-center p-5 pt-16">
				<h2 className="text-5xl">Contact me</h2>
				<p className="md:text-xl">Any questions or feedback?</p>
				<div className="flex items-center">
					<p>
						Message me on <span className="text-cyan-400">LinkedIn</span>
					</p>
					<a
						title="LinkedIn Profile"
						href="https://www.linkedin.com/in/markus-kojo/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<AiOutlineLinkedin size={40} />
					</a>
				</div>
				<div className="md:text-2xl">
					<p>
						email:{" "}
						<a className="text-cyan-400 text-xl" href="mailto:markuskojo@msn.com">
							markuskojo@msn.com
						</a>
					</p>
				</div>
				<p className="my-5 md:text-lg">Or use the contact form below to send me a message</p>
				<Form />
			</div>
			<DividerBottom />
		</div>
	);
};
export default Contact;
