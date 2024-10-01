import { useRef } from "react";
import useCustomHook from "../hooks/useCustomHook";
import { FaDownload } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";

const Home = () => {
  const scrollTab = useRef();
  useCustomHook(scrollTab);

  return (
    <section id="Home" ref={scrollTab} className="home">
      <div className="content">
        <div className="name">
          MY NAME IS <span>KUSHAL CHAVAN</span>
        </div>
        <div className="des">
          a passionate fullstack developer specializing in building dynamic,
          user-centric web applications. With expertise in both frontend and
          backend technologies, I transform ideas into efficient, scalable
          solutions. Let’s collaborate to create something amazing!
        </div>

        <div className="buttons">
          <a
            href="/kushal chavan resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download My CV <FaDownload />
          </a>

          <a
            href="#Contacts"
            target="_blank"
            onClick={(e) => {
              e.preventDefault();
              const section = document.getElementById("Contacts");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            rel="noopener noreferrer"
          >
            Contact Me <FaLocationArrow />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
