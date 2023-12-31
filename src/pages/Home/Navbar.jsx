import AuthContainer from "./Auth/AuthContainer";
import { Link as NavLink } from "react-scroll";
import githubIcon from "../../assets/github-mark.svg";


const Navbar = () => {
  return (
    <>
      <nav className="header fixed right-0 z-50 mx-auto flex h-16 w-full flex-row justify-between border-b border-slate-700 bg-gray-900 sm:px-[max((100vw-1500px)/2,0px)]">
        <div className="mx-3 flex flex-row items-center justify-between gap-4 text-lag text-white">
          <NavLink
            to="overview"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            Overview
          </NavLink>
          <NavLink
            to="team"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            Team
          </NavLink>
          <a
            href="https://github.com/ConquestIO/Conquest"
            target="_blank"
            rel="noreferrer"
          >
            {/* TODO: get icon to show */}
            <img src={githubIcon} alt="GitHub" className="w-6 h-6 cursor-pointer" />
          </a>
        </div>
        <div id="header-right" className="flex items-center">
          <AuthContainer />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
