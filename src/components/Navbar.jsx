import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeTabActive } from "../redux/action";
import { HiBars3BottomRight } from "react-icons/hi2";
import { navItems } from "../constants/data";

const Navbar = () => {
  const [listNav, setListNav] = useState(navItems);
  const [statusNav, setStatusNav] = useState(null);
  const activeTab = useSelector((state) => state.activeTab);

  const dispatch = useDispatch();

  const toggleNav = () => {
    setStatusNav(statusNav === null ? "active" : null);
  };

  const changeTab = (value) => {
    dispatch(changeTabActive(value));
    toggleNav();

    // scroll to the corresponding section on the page
    const section = document.getElementById(value);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <header>
      <div className="logo">
        <span id="portfolio-logo">K.</span>
      </div>

      <nav className={statusNav === "active" ? "active" : ""}>
        {listNav.map((value) => (
          <span
            key={value}
            className={activeTab === value ? "active" : ""}
            onClick={() => changeTab(value)}
          >
            {value}
          </span>
        ))}
      </nav>
      <div className="icon-bar" onClick={toggleNav}>
        <HiBars3BottomRight />
      </div>
    </header>
  );
};

export default Navbar;
