const Skill = (props) => {
	return (
		<div className="bg-slate-800 w-24 h-24 p-4 text-center rounded shadow-sm shadow-white/20">
			<img className="w-12 mx-auto" src={props.img} alt="image" />
			<p className="text-xs">{props.title}</p>
		</div>
	);
};
export default Skill;
