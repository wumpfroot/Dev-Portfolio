import ProjectCard from "./ProjectCard";
import { projects } from "../projectData";

import { AiOutlineGithub } from "react-icons/ai";

const Projects = () => {
	return (
		<div id="projects" className="mx-auto max-w-xl md:min-w-full">
			<h2 className="text-4xl pt-28 text-center mb-5 md:text-6xl">Selected projects</h2>
			<i className="flex justify-center items-center gap-3 text-base md:text-lg">
				more projects at my github{" "}
				<a title="GitHub profile" href="https://github.com/wumpfroot" className="cursor-pointer" target="_blank" rel="noopener noreferrer">
					<AiOutlineGithub size={50} />
				</a>{" "}
			</i>
			<div className="grid lg:grid-cols-3 gap-2 mx-3">
				{projects.map((project) => (
					<div key={project.id}>
						<ProjectCard {...project} />
					</div>
				))}
			</div>
		</div>
	);
};
export default Projects;
