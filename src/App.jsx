import { Project } from "./components/Project";
import data from "./data.json"

export const App = () => {
  const allProjects = data.projects;

  return (
    <div>
      {allProjects.map((project) => {
        return <Project key={project.id} name={project.name} description={project.description} tags={project.tags} github={project.github} netlify={project.netlify} id={project.id} image={project.image} />
      })}
    </div>
  );

}
