import Skill from "./Skill";
import { skillData, styleData } from "./skillData";

const Skills = () => {
	return (
		<div
			id="skills"
			className="flex flex-col items-center justify-center h-screen"
		>
			<h1 className="text-5xl mb-7 pt-28">Skills</h1>
			<h2 className="text-xl">Programming</h2>
			<div className="grid grid-cols-2 gap-3 md:grid-cols-4">
				{skillData.map((skill) => (
					<div key={skill.id}>
						<Skill {...skill} />
					</div>
				))}
			</div>
			<h2 className="text-xl mt-8">Styling</h2>
			<div className="grid grid-cols-2 gap-3 md:grid-cols-4">
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
