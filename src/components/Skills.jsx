import { useRef, useState } from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import useCustomHook from "../hooks/useCustomHook";

const skills = [
  {
    name: "Javascript",
    des: "JavaScript is the foundation of my development expertise, enabling me to create dynamic, interactive, and efficient web applications. JavaScript is at the core of my fullstack development toolkit.",
    icon: <IoLogoJavascript />,
  },
  {
    name: "Typescript",
    des: "TypeScript enhances my JavaScript development with strong typing, ensuring more robust and maintainable code. It improves scalability and reduces errors, especially in large-scale applications, making development more predictable and efficient.",
    icon: <SiTypescript />,
  },
  {
    name: "TailwindCss",
    des: "Tailwind CSS streamlines my workflow by allowing me to design responsive and modern UIs with utility-first classes, making it easy to create visually appealing layouts without writing extensive custom CSS.",
    icon: <RiTailwindCssFill />,
  },
  {
    name: "ReactJs",
    des: "React.js empowers me to build interactive and dynamic user interfaces with reusable components. Its virtual DOM and state management features allow me to create high-performance front-end applications. ",
    icon: <FaReact />,
  },
  {
    name: "NextJs",
    des: "Next.js provides a powerful framework for building server-side rendered React applications. It enhances SEO and performance while offering seamless routing and full-stack capabilities, making it ideal for creating complex web apps.",
    icon: <RiNextjsFill />,
  },
  {
    name: "Nodejs",
    des: "Node.js allows me to build efficient, scalable backends using JavaScript on the server. Its event-driven architecture and vast ecosystem enable me to develop fast, real-time APIs and handle data-intensive applications effectively.",
    icon: <FaNodeJs />,
  },
];

const Skills = () => {
  const [listSkills, setListSkills] = useState(skills);
  const divs = useRef([]);
  const scrollTab = useRef();
  useCustomHook(scrollTab, divs);

  return (
    <section id="Skills" className="skills" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Skills
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        As a fullstack developer, I have a diverse skill set across both
        frontend and backend technologies. Here are some of the key tools and
        technologies I work with
      </div>
      <div className="list">
        {listSkills.map((value, key) => (
          <div
            className={"item "}
            key={key}
            ref={(el) => el && divs.current.push(el)}
          >
            {value.icon}
            <h3>{value.name}</h3>
            <div className="des">{value.des}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
