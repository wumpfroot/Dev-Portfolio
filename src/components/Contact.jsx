import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const Contact = () => {
	const form = useRef();

	const sending = () =>
		toast.info("Sending...", {
			hideProgressBar: true,
			theme: "colored",
			autoClose: 5000,
		});

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				`${import.meta.env.VITE_SERVICEID}`,
				`${import.meta.env.VITE_TEMPLATEID}`,
				form.current,
				`${import.meta.env.VITE_PUBLICKEY}`
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log("Message Sent");
					toast.success("Message sent📨");
					e.target.reset();
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className="p-5 h-screen">
			<h2>Contact me</h2>
			<p>Any questions, feedback? Or just know where to reach me?</p>
			<p>Use these links</p>
			<div className="text-4xl flex">
				<a title="GitHub Profile" href="https://github.com/wumpfroot">
					<AiOutlineGithub />
				</a>
				<a
					title="LinkedIn Profile"
					href="https://www.linkedin.com/in/markus-kojo/"
				>
					<AiOutlineLinkedin />
				</a>
			</div>
			<p>Or use the contact form below to send me a message</p>
			<form className="flex flex-col" ref={form} onSubmit={sendEmail}>
				<label>Name</label>
				<input type="text" name="user_name" />
				<label>Email</label>
				<input type="email" name="user_email" />
				<label>Message</label>
				<textarea name="message" />
				<button
					className="border border-gray-600 rounded-md p-2 hover:border hover:border-cyan-400"
					type="submit"
					value="Send"
					onClick={sending}
				>
					Send
				</button>
			</form>
			<ToastContainer position="bottom-right" autoClose={3000} />
		</div>
	);
};
export default Contact;
