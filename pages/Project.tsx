"use client";
import echostream from "../assets/echostream.png";
import illyaFanSite from "../assets/illya-fansite.png";
import illyaFullStack from "../assets/illya-fullstack.png";
import kpopWired from "../assets/kpop-wired.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import { useState } from "react";

export default function Project() {
  interface Project {
    projectName: string[];
    codeURL: string;
    demoURL: string;
    projectIMG: StaticImageData[];
    projectALT: string[];
    projectTech: string[];
    projectDescription: string[];
    classNames?: string;
  }

  const project: Project = {
    projectName: [
      "EchoStream",
      "First Iteration of Echostream",
      "Second Iteration of Echostream",
      "Third Iteration of EchoStream",
    ],
    codeURL: "https://github.com/choir27/EchoStream",
    demoURL: "https://echostream.netlify.app/",
    projectIMG: [echostream, illyaFanSite, illyaFullStack, kpopWired],
    projectALT: [
      "website landing page preview of EchoStream",
      "website landing page preview of illya fan site",
      "full stack website landing page preview of illya fan site",
      "website landing page preview of Kpop Wired",
    ],
    projectTech: ["Next", "TypeScript", "AppWrite"],
    projectDescription: [
      "Since 2022, I have contributed improvements to EchoStream, which is an online audio-sharing service where users can upload their music tracks. Iterating on previous versions of the application, I continue working hard to uphold engineering standards by focusing on writing good README/documentation, consistent performance, and quality, clean, and efficient code. I wanted to add a page where it would dynamically show certain songs and change the most recommended songs to each user based on the songs they listen to using an advanced algorithm; however, I wanted to prioritize my deadline for delivering this application into production without sacrificing any of my top-level goals.",
      "Initially, this project started as a simple HTML, JS, and CSS project.  Around this period, I was learning express and how to use it alongside node to build a full-stack application, so I built the backend on top of this project and used it as a platform to experiment with, learn more with, and establish what I learned about building a full-stack application.  It was also a good initial introduction to working with a database, and its relationship with your frontend and backend code.",
      "Having become more familiar with building a full-stack application and learning React recently, I decided to take an additional step further on Echostream and iterate on it. I worked on implementing authentication for new and old users, making sure users could only access certain functionalities. I was also able to become more comfortable with building React custom components and React in-built hooks like useState, useEffect, and useContext.",
      "Considering my latest iteration of EchoStream, I felt like the theme of the application didn't reflect its overall functionality or purpose, so I changed the theme and \"branding\" to be more music-oriented. Using useCallback and useMemo, I memoized many of the functions I needed to utilize to prevent unnecessary re-rendering, thus increasing the render speed of the overall application. I was also able to become more familiar with other React in-built hooks, like useMemo, useNavigate, and useHistory, experimenting with them and understanding what they're capable of accomplishing.",
    ],
  };

  const [toggleIllya, setToggleIllya] = useState("hidden");
  const [toggleFSIllya, setToggleFSIllya] = useState("hidden");
  const [toggleKpop, setToggleKpop] = useState("hidden");

  function toggleDisplay(
    display: string,
    setDisplay: (e: string) => void,
  ): void {
    if (display === "hidden") {
      setDisplay("block");
    } else {
      setDisplay("hidden");
    }
  }

  return (
    <section id="myProject" className="flex flex-col items-left p-2">
      <h2 className="text-6xl my-12 px-5 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
        Projects
      </h2>
      <section className="flex flex-col items-center">
        {
          <section className="p-4" key={project.projectName[0]}>
            <section>
              <h3 className="text-6xl mb-4 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
                {project.projectName[0]}
              </h3>
              <Image src={project.projectIMG[0]} alt={project.projectALT[0]} />
              <div className="mb-6 pt-6">
                <Link
                  href={project.demoURL}
                  className="border-b-2 border-b-black-700 text-4xl pb-1 pt-2 mr-10 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
                >
                  Project Demo
                </Link>
                <Link
                  href={project.codeURL}
                  className="border-b-2 border-b-black-700 text-4xl pb-1 pt-2 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
                >
                  Code URL
                </Link>
              </div>
              <div className="mb-4">
                {project.projectTech.map((language: string) => {
                  return (
                    <span
                      className="uppercase text-2xl mt-2 mr-8 min-[2400px]:text-6xl min-[2400px]:leading-[6rem]"
                      key={language}
                    >
                      {language}
                    </span>
                  );
                })}
              </div>
              <p className="text-2xl min-[2400px]:text-6xl min-[2400px]:leading-[6rem]">
                {project.projectDescription[0]}
              </p>
            </section>

            <section className="pt-10">
              <h3 className="pt-4 text-4xl mb-4 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
                {project.projectName[1]}
              </h3>
              <Button
                text={`${toggleIllya === "hidden" ? "Show Details" : "Hide Details"}`}
                onClick={() => toggleDisplay(toggleIllya, setToggleIllya)}
              />
              <Image
                src={project.projectIMG[1]}
                alt={project.projectALT[1]}
                className={`${toggleIllya === "hidden" ? toggleIllya : ""}`}
              />
              <p
                className={`text-2xl mt-6 ${toggleIllya} min-[2400px]:text-6xl min-[2400px]:leading-[6rem]`}
              >
                {project.projectDescription[1]}
              </p>
            </section>

            <section className="pt-10">
              <h3 className="pt-4 text-4xl mb-4 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
                {project.projectName[2]}
              </h3>
              <Button
                text={`${toggleFSIllya === "hidden" ? "Show Details" : "Hide Details"}`}
                onClick={() => toggleDisplay(toggleFSIllya, setToggleFSIllya)}
              />
              <Image
                src={project.projectIMG[2]}
                alt={project.projectALT[2]}
                className={`${toggleFSIllya === "hidden" ? toggleFSIllya : ""}`}
              />
              <p
                className={`text-2xl mt-6 ${toggleFSIllya} min-[2400px]:text-6xl min-[2400px]:leading-[6rem]`}
              >
                {project.projectDescription[2]}
              </p>
            </section>

            <section className="pt-10">
              <h3 className="pt-4 text-4xl mb-4 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
                {project.projectName[3]}
              </h3>
              <Button
                text={`${toggleKpop === "hidden" ? "Show Details" : "Hide Details"}`}
                onClick={() => toggleDisplay(toggleKpop, setToggleKpop)}
              />
              <Image
                src={project.projectIMG[3]}
                alt={project.projectALT[3]}
                className={`${toggleKpop === "hidden" ? toggleKpop : ""}`}
              />
              <p
                className={`text-2xl mt-6 ${toggleKpop} min-[2400px]:text-6xl min-[2400px]:leading-[6rem]`}
              >
                {project.projectDescription[3]}
              </p>
            </section>
          </section>
        }
      </section>
    </section>
  );
}
