import { motion } from "framer-motion";

const ProjectCard = (props) => {
	return (
		<div
			key={props.id}
			className="shadow-md shadow-cyan-400/10 flex flex-col items-center justify-center p-4 mb-8 rounded-md md:grid md:grid-cols-2"
		>
			<div className="text-center">
				<h2 className="text-xl md:text-3xl">{props.title}</h2>
				<img className="w-full" src={props.img} alt="" />
			</div>
			<div className="flex flex-col items-center p-3">
				<div className="flex w-full justify-around p-2 text-center md:text-lg">
					<div>
						<img
							className="mx-auto w-9 md:w-14"
							src={props.stack[0].img}
							alt={props.stack[0].tech}
						/>
						<p>{props.stack[0].tech}</p>
					</div>
					<div>
						<img
							className="mx-auto w-9 md:w-14"
							src={props.stack[1].img}
							alt={props.stack[1].tech}
						/>
						<p>{props.stack[1].tech}</p>
					</div>
					<div>
						<img
							className="mx-auto w-9 md:w-14"
							src={props.stack[2].img}
							alt={props.stack[2].tech}
						/>
						<p>{props.stack[2].tech}</p>
					</div>
				</div>
				<div className="text-sm md:text-xl">
					<p>{props.description}</p>
				</div>
				<div className="flex gap-3 my-3">
					<motion.button
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						className="bg-white text-gray-800 rounded-md p-2"
					>
						<a href={props.codeUrl} target="_blank" rel="noopener noreferrer">
							Source Code
						</a>
					</motion.button>
					<motion.button
						whileTap={{ scale: 0.95 }}
						className="border border-gray-600 rounded-md p-2 hover:border hover:border-cyan-400"
					>
						<a href={props.liveUrl} target="_blank" rel="noopener noreferrer">
							{props.id !== 4 ? "Live Site" : "Download"}
						</a>
					</motion.button>
				</div>
			</div>
		</div>
	);
};
export default ProjectCard;
