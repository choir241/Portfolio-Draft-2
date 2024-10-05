"use client";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from "react";

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState("hidden");

  return (
    <nav
      className="fixed flex flex-col self-end bg-black w-full"
      id="lookingForward"
    >
      <IoIosMenu
        className={`text-6xl self-end hover:cursor-pointer hover:scale-75 hover:ease-in hover:duration-300 ${toggleMenu === "hidden" ? "" : "hidden"}  min-[2400px]:text-[120px]`}
        onClick={() => setToggleMenu("flex")}
      />
      <IoIosClose
        className={`text-6xl self-end hover:cursor-pointer hover:rotate-90 hover:ease-in hover:duration-300 ${toggleMenu === "hidden" ? "hidden" : ""}  min-[2400px]:text-[120px]`}
        onClick={() => setToggleMenu("hidden")}
      />
      <ul className={`${toggleMenu} items-center flex-col pb-4 px-4`}>
        <li className="mb-2 hover:translate-x-5 hover:ease-in hover:duration-300">
          <a className="text-4xl" href="/blogs-and-streams">
            Blogs and Streams
          </a>
        </li>
        <li className="mb-2 hover:translate-x-5 hover:ease-in hover:duration-300">
          <a className="text-4xl" href="/documentation">
            Documentation
          </a>
        </li>
        <li className="mb-2 hover:translate-x-5 hover:ease-in hover:duration-300">
          <a className="text-4xl" href="/about-me">
            About Me
          </a>
        </li>
      </ul>
    </nav>
  );
}
