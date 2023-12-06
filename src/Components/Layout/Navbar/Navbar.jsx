import { FiMail } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaFreeCodeCamp } from "react-icons/fa";
import { VscProject } from "react-icons/vsc";
import { RiContactsLine } from "react-icons/ri";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { useScroll } from "./useScroll";
export default function Navbar() {
  const { scrollState, sectionScroll } = useScroll();
  function menuToggler() {
    const target = document.getElementById("nav-menu");
    target.classList.toggle("menu-toggle");
  }
  return (
    <>
      <nav className={scrollState ? "nav-up" : null}>
        <ul>
          <li>
            <a href="mailto:muhammad96osama@gmail.com">
              <FiMail className="nav-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/muhammad96osama/"
              target="blank"
            >
              <AiOutlineLinkedin className="nav-icon" />
            </a>
          </li>
          <li>
            <a href="https://www.freecodecamp.org/Arplight" target="blank">
              <FaFreeCodeCamp className="nav-icon" />
            </a>
          </li>
          <li>
            <a href="https://github.com/Arplight" target="blank">
              <BsGithub className="nav-icon" />
            </a>
          </li>
          <li className="break btn">
            <button onClick={() => sectionScroll("projects")}>
              <i>Projects</i>
            </button>
          </li>
          <li className="btn">
            <button onClick={() => sectionScroll("contact")}>
              <i>Contact Me</i>
            </button>
          </li>
        </ul>
      </nav>
      <div className="nav-mobile-menu menu-toggle" id="nav-menu">
        <button className="menu-btn" onClick={menuToggler}>
          <MdKeyboardDoubleArrowLeft className="icon" />
        </button>
        <ul>
          <li>
            <VscProject className="icon" />
            <button
              onClick={() => {
                sectionScroll("projects");
                menuToggler();
              }}
            >
              <i>Projects</i>
            </button>
          </li>
          <li>
            <RiContactsLine className="icon" />
            <button
              onClick={() => {
                sectionScroll("contact");
                menuToggler();
              }}
            >
              <i>Contact Me</i>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
