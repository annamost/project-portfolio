import { Project } from "./components/Project";
import data from "./data.json"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const App = () => {
  const allProjects = data.projects;
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <div className="project-section">
      <div className="project-slider">
        <Slider {...settings}>
          {allProjects.map((project) => {
            return <Project key={project.id} name={project.name} description={project.description} tags={project.tags} github={project.github} netlify={project.netlify} id={project.id} image={project.image} />
          })}
        </Slider>
      </div>
    </div>
  );

}
