import React from "react";
import kinski from "../../assets/kinski.png";
import pearl from "../../assets/pearl.png";
import hunter from "../../assets/Hunter.jpg";
import scott from "../../assets/scott.png";
import julian from "../../assets/Julian.jpg";
import githubIcon from "../../assets/github-mark.svg";
import linkedinIcon from "../../assets/linked-in.png";

const Teams = () => {
  return (
    <>
      <div id="team" className="p-10 bg-gray-900 text-center text-white">
        <h2 className="font-extrabold text-4xl leading-tight">Meet the Team</h2>
        <div className="team-container mt-16 flex justify-center gap-16">
          <div className="team-member flex flex-col items-center">
            <img src={kinski} alt="Kinski" className="w-48 h-48 rounded-full" />
            <h1 className="mb-4 mt-6 text-xl font-bold">Kinski Wu</h1>
            <div className="mt-4 flex gap-2">
              <a
                href="https://www.linkedin.com/in/kinskiwu/"
                target="_blank"
                rel="noopener noreferrer"
                className="team-link inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-8 h-8 mr-2"
                />
              </a>
              <a
                href="https://github.com/kinskiwu"
                target="_blank"
                rel="noopener noreferrer"
                className="team-link inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800"
              >
                <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="team-member flex flex-col items-center">
            <img src={pearl} alt="Pearl" className="w-48 h-48 rounded-full" />
            <h1 className="mb-4 mt-6 text-xl font-bold">Pearl Chang</h1>
            <div className="mt-4 flex gap-2">
              <a
                href="https://www.linkedin.com/in/pearlhchang/"
                target="_blank"
                rel="noopener noreferrer"
                className="team-link inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-8 h-8 mr-2"
                />
              </a>
              <a
                href="https://github.com/pearlhchang"
                target="_blank"
                rel="noopener noreferrer"
                className="team-link inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800"
              >
                <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="team-member flex flex-col items-center">
            <img src={hunter} alt="Hunter" className="w-48 h-48 rounded-full" />
            <h1 className="mb-4 mt-6 text-xl font-bold">Hunter Shaw</h1>
            <div className="mt-4 flex gap-2">
              <a
                href="https://www.linkedin.com/in/hshaw215/"
                target="_blank"
                rel="noopener noreferrer"
                className="team-link inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-8 h-8 mr-2"
                />
              </a>
              <a
                href="https://github.com/HShaw215"
                target="_blank"
                rel="noopener noreferrer"
                className="team-link inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800"
              >
                <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="team-member flex flex-col items-center">
            <img src={scott} alt="Scott" className="w-48 h-48 rounded-full" />
            <h1 className="mb-4 mt-6 text-xl font-bold">Scott Brasko</h1>
            <div className="mt-4 flex gap-2">
              <a
                href="https://www.linkedin.com/in/scott-brasko/"
                target="_blank"
                rel="noopener noreferrer"
                className="team-link inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-8 h-8 mr-2"
                />
              </a>
              <a
                href="https://github.com/Scott-Brasko"
                target="_blank"
                rel="noopener noreferrer"
                className="team-link inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800"
              >
                <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
              </a>
            </div>
          </div>
          <div className="team-member flex flex-col items-center">
            <img src={julian} alt="Julian" className="w-48 h-48 rounded-full" />
            <h1 className="mb-4 mt-6 text-xl font-bold">Julian Babon</h1>
            <div className="mt-4 flex gap-2">
              <a
                href="https://www.linkedin.com/in/julianbabon/"
                target="_blank"
                rel="noopener noreferrer"
                className="team-link inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800"
              >
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="w-8 h-8 mr-2"
                />
              </a>
              <a
                href="https://github.com/babonjmc"
                target="_blank"
                rel="noopener noreferrer"
                className="team-link inline-flex items-center justify-center w-8 h-8 rounded-full bg-gray-800"
              >
                <img src={githubIcon} alt="GitHub" className="w-8 h-8" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teams;
