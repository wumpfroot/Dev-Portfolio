import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
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
		<>
			<form
				className="flex flex-col max-w-2xl text-black"
				ref={form}
				onSubmit={sendEmail}
			>
				<label className="text-lg text-white mb-1">Name</label>
				<input className="p-1 rounded mb-2" type="text" name="user_name" />
				<label className="text-lg text-white mb-1">Email</label>
				<input className="p-1 rounded mb-2" type="email" name="user_email" />
				<label className="text-lg text-white mb-1">Message</label>
				<textarea className=" p-1 rounded mb-4" name="message" />
				<button
					className="text-white border border-gray-600 rounded-md p-2 hover:border hover:border-cyan-400"
					type="submit"
					value="Send"
					onClick={sending}
				>
					Send
				</button>
			</form>
			<ToastContainer position="bottom-right" autoClose={3000} />
		</>
	);
};
export default Form;
