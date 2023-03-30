import ProjectCard from "./ProjectCard";
import { projects } from "../projectData";

const Projects = () => {
	return (
		<div>
			<h2 className="text-2xl">Projects</h2>
			{projects.map((project) => (
				<div key={project.id}>
					<ProjectCard {...project} />
				</div>
			))}
		</div>
	);
};
export default Projects;
