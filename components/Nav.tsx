"use client";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from "react";

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState("hidden");

    const url = window.location.href;
    const splitUrl = url.split("/");
    const toggleNav = splitUrl[splitUrl.length-1];

  return (
    <nav
      className="fixed flex flex-col self-end bg-[#137a7f] w-full p-0"
      id="lookingForward"
    >
      <ul className="flex max-[1000px]:hidden items-center justify-around px-4">
        <li className={`py-4 text-[#bec8d1] hover:opacity-70 hover:ease-in hover:duration-300 ${toggleNav === "" ? "currPage" : ""}`}>
          <a className="text-4xl h-full" href="/">
            Home
          </a>
        </li>
        <li className={`text-[#bec8d1] hover:opacity-70 hover:ease-in hover:duration-300 ${toggleNav === "documentation" ? "currPage" : ""}`}>
          <a className="text-4xl" href="/documentation">
            Documentation
          </a>
        </li>
        <li className={`text-[#bec8d1] hover:opacity-70 hover:ease-in hover:duration-300 ${toggleNav === "blogs-and-streams" ? "currPage" : ""}`}>
          <a className="text-4xl" href="/blogs-and-streams">
            Blogs and Streams
          </a>
        </li>
        <li className={`text-[#bec8d1] hover:opacity-70 hover:ease-in hover:duration-300 ${toggleNav === "about-me" ? "currPage" : ""}`}>
          <a className="text-4xl" href="/about-me">
            About Me
          </a>
        </li>
      </ul>

      <div className="hidden max-[1000px]:flex flex-col self-end w-full">
        <IoIosMenu
          className={`text-[#bec8d1] text-6xl self-end hover:cursor-pointer hover:scale-75 hover:ease-in hover:duration-300 ${
            toggleMenu === "hidden" ? "" : "hidden"
          }  min-[2400px]:text-[120px]`}
          onClick={() => setToggleMenu("flex")}
        />
        <IoIosClose
          className={`text-[#bec8d1] text-6xl self-end hover:cursor-pointer hover:rotate-90 hover:ease-in hover:duration-300 ${
            toggleMenu === "hidden" ? "hidden" : ""
          }  min-[2400px]:text-[120px]`}
          onClick={() => setToggleMenu("hidden")}
        />
        <ul
          className={`${toggleMenu} items-center flex-col justify-center flex pb-4 px-4`}
        >
          <li className="text-[#bec8d1] mb-2 hover:opacity-70 hover:ease-in hover:duration-300">
            <a className="text-4xl" href="/projects">
              Projects
            </a>
          </li>
          <li className="text-[#bec8d1] mb-2 hover:opacity-70 hover:ease-in hover:duration-300">
            <a className="text-4xl" href="/documentation">
              Documentation
            </a>
          </li>
          <li className="text-[#bec8d1] mb-2 hover:opacity-70 hover:ease-in hover:duration-300">
            <a className="text-4xl" href="/blogs-and-streams">
              Blogs and Streams
            </a>
          </li>
          <li className="text-[#bec8d1] mb-2 hover:opacity-70 hover:ease-in hover:duration-300">
            <a className="text-4xl" href="/a>bout-me">
              About Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
