import { useState, useRef } from "react";
import useCustomHook from "../hooks/useCustomHook";
import { contacts } from "../constants/data";

const Contacts = () => {
  const [listContacts] = useState(contacts);
  const divs = useRef([]);
  const scrollTab = useRef();
  useCustomHook(scrollTab, divs);

  return (
    <section id="Contacts" className="contacts" ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        This is my Contacts
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Let's connect! Feel free to reach out for collaborations, freelance
        opportunities, or any questions. I'm always open to discussing new
        projects and ideas
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className="item" key={key}>
            <h3>{value.title}</h3>
            <div>{value.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Contacts;
