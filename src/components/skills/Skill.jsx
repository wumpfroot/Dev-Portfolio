const Skill = (props) => {
	return (
		<div className="cursor-pointer bg-slate-800 w-24 h-24 p-4 text-center rounded shadow-md shadow-cyan-400/20 hover:shadow-lg hover:shadow-cyan-400/20 md:w-40 md:h-40 md:grid md:place-content-center">
			<a href={props.link} target="_blank" rel="noopener noreferrer">
				<img className="w-14 mx-auto md:w-20" src={props.img} alt="image" />
				<p className="text-xs">{props.title}</p>
			</a>
		</div>
	);
};
export default Skill;
