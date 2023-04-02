const ProjectCard = (props) => {
	return (
		<div
			key={props.id}
			className="shadow-md shadow-white/10 flex flex-col items-center justify-center p-4 mb-3 rounded-md"
		>
			<h2 className="text-xl">{props.title}</h2>
			<img className="w-full" src={props.img} alt="" />
			<div className="flex w-full justify-around p-2">
				<div className="self-center">
					<img className="mx-auto w-9" src={props.stack[0].img} alt="" />
					<p>{props.stack[0].tech}</p>
				</div>
				<div>
					<img className="mx-auto w-9" src={props.stack[1].img} alt="" />
					<p>{props.stack[1].tech}</p>
				</div>
				<div>
					<img className="mx-auto w-9" src={props.stack[2].img} alt="" />
					<p>{props.stack[2].tech}</p>
				</div>
			</div>
			<div className="text-sm">
				<p>{props.description}</p>
			</div>
			<div className="flex gap-3">
				<button className="bg-white text-gray-800 rounded-md p-2">
					<a href={props.codeUrl} target="_blank" rel="noopener noreferrer">
						Source Code
					</a>
				</button>
				{props.id !== 3 ? (
					<button className="border border-gray-600 rounded-md p-2 hover:border hover:border-cyan-400">
						<a href={props.liveUrl} target="_blank" rel="noopener noreferrer">
							Live Site
						</a>
					</button>
				) : (
					<button className="border border-gray-600 rounded-md p-2 hover:border hover:border-cyan-400">
						<a href={props.liveUrl} download>
							Download
						</a>
					</button>
				)}
			</div>
		</div>
	);
};
export default ProjectCard;
