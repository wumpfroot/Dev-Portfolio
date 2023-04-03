const Skill = (props) => {
	return (
		<div className="bg-slate-800 w-24 h-24 p-4 text-center rounded shadow-sm shadow-white/20 md:w-40 md:h-40 md:grid md:place-content-center">
			<img className="w-12 mx-auto md:w-20" src={props.img} alt="image" />
			<p className="text-xs">{props.title}</p>
		</div>
	);
};
export default Skill;
