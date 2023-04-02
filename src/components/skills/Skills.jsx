import Skill from "./Skill";
import { skillData, styleData } from "./skillData";

const Skills = () => {
	return (
		<div className="flex flex-col items-center">
			<h1 className="text-3xl mb-7">Skills</h1>
			<h2 className="text-xl">Programming</h2>
			<div className="grid grid-cols-2 gap-1">
				{skillData.map((skill) => (
					<div key={skill.id}>
						<Skill {...skill} />
					</div>
				))}
			</div>
			<h2 className="text-xl">Styling</h2>
			<div className="grid grid-cols-2 gap-1">
				{styleData.map((style) => (
					<div key={style.id}>
						<Skill {...style} />
					</div>
				))}
			</div>
		</div>
	);
};
export default Skills;
