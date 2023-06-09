import ProjectCard from "./ProjectCard";
import { projects } from "../projectData";

const Projects = () => {
	return (
		<div id="projects" className="mx-auto max-w-xl md:min-w-full">
			<h2 className="text-6xl pt-28 text-center">Projects</h2>
			{projects.map((project) => (
				<div key={project.id}>
					<ProjectCard {...project} />
				</div>
			))}
		</div>
	);
};
export default Projects;
