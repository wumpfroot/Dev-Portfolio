import { motion } from "framer-motion";

const Skill = (props) => {
	return (
		<motion.div
			whileHover={{ scale: 1.05 }}
			className="cursor-pointer bg-slate-800 w-28 h-28 p-4 text-center rounded shadow-md shadow-cyan-400/20 hover:shadow-lg hover:shadow-cyan-400/20 md:w-40 md:h-40 grid place-content-center"
		>
			<a href={props.link} target="_blank" rel="noopener noreferrer">
				<img className="w-14 mx-auto md:w-20" src={props.img} alt="image" />
				<p className="text-xs font-semibold">{props.title}</p>
			</a>
		</motion.div>
	);
};
export default Skill;
