import { Project } from "./components/Project";
import data from "./data.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LogoLink } from "./components/LogoLink";
import { SkillsColumn } from "./components/SkillsColumn";

export const App = () => {
  const allProjects = data.projects;
  const allLinks = data.links;
  const allSkills = data.skills;
  const allTech = data.tech;
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <main>
      <div className="hero-section">
        <div className="hero-text">
          <h3>I am Anna Ostenrath.</h3>
          <h1>Frontend Developer</h1>
          {/* <p>Anna is an experienced programmer creating innovative solutions and user-friendly applications. </p> */}
          <div className="logo-list">
            {allLinks.map((link) => {
              return (
                <LogoLink key={link.name} link={link.link} image={link.image} />
              );
            })}
          </div>
        </div>
        <div className="sketch-container">
          <img src={data.photos[1].image} alt="" />
        </div>
      </div>
      <div className="skills-section">
        <h2>Skills</h2>
        <div className="skill-column-container">
          {allSkills.map((skill, index) => {
            return (
              <SkillsColumn
                key={index}
                name={skill.name}
                skills={skill.skill}
              />
            );
          })}
        </div>
      </div>
      <div className="project-section">
        <h2>Projects</h2>
        <div className="project-slider">
          <Slider {...settings}>
            {allProjects.map((project) => {
              return (
                <Project
                  key={project.id}
                  name={project.name}
                  description={project.description}
                  tags={project.tags}
                  github={project.github}
                  netlify={project.netlify}
                  id={project.id}
                  image={project.image}
                />
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="tech-section">
        <h2>Tech</h2>
        <p className="tech-text">{allTech}</p>
      </div>
      <div className="call-to-action">
        <div className="profile-container">
          <img src={data.photos[0].image} alt="" />
        </div>
        <div className="call-text">
          <h2>Let's talk!</h2>
          <p>Anna Ostenrath</p>
          <p>anna.ostenrath@gmail.com</p>
          <div className="logo-list">
            {allLinks.map((link) => {
              return (
                <LogoLink key={link.name} link={link.link} image={link.image} />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
