import { useState, useRef } from "react";
import { FaPersonCircleQuestion } from "react-icons/fa6";
import { FaEarthAsia } from "react-icons/fa6";
import useCustomHook from "../hooks/useCustomHook";
import { projects } from "../constants/data";

const Projects = () => {
  const [listProjects] = useState(projects);
  const divs = useRef([]);
  const scrollTab = useRef();
  useCustomHook(scrollTab, divs);

  return (
    <section id="Projects" className="projects" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Projects
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        As a Fullstack Developer, I’ve built projects that showcase my skills in
        creating dynamic front-ends and robust back-ends. Using React, Next.js,
        Node.js, TypeScript, and Tailwind CSS, I turn complex ideas into
        functional, user-friendly applications.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div
            className="item"
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            <div className="images">
              <img src={value.images} alt="" />
            </div>
            <div className="content">
              <a href={value.link}>
                <h3>{value.name}</h3>
              </a>
              <div className="des">{value.des}</div>
              <div className="mission">
                <div>
                  <FaPersonCircleQuestion />
                </div>
                <div>
                  <h4>Mission</h4>
                  <div className="des">{value.mission}</div>
                </div>
              </div>
              <div className="mission">
                <div>
                  <FaEarthAsia />
                </div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
