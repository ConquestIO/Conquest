import AuthContainer from "./Auth/AuthContainer";
import { Link as NavLink } from "react-scroll";

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
            className="hover:underline"
          >
            Overview
          </NavLink>
          <NavLink
            to="team"
            spy={true}
            smooth={true}
            duration={500}
            className="hover:underline"
          >
            Team
          </NavLink>
          <a
            href="https://github.com/ConquestIO/Conquest"
            target="_blank"
            rel="noreferrer"
          >
            {/* TODO: get icon to show */}
            <img alt="GitHub" className="w-8 h-8" />
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
