"use client";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [toggleMenu, setToggleMenu] = useState("hidden");

  return (
    <nav
      className="fixed flex flex-col self-end bg-[#137a7f] w-full"
      id="lookingForward"
    >
      <ul className="flex max-[1000px]:hidden items-center justify-around py-4 px-4">
        <li className="text-[#bec8d1] mb-2 hover:opacity-70 hover:ease-in hover:duration-300">
          <Link className="text-4xl" href="/">
            Home
          </Link>
        </li>
        <li className="text-[#bec8d1] mb-2 hover:opacity-70 hover:ease-in hover:duration-300">
          <Link className="text-4xl" href="/documentation">
            Documentation
          </Link>
        </li>
        <li className="text-[#bec8d1] mb-2 hover:opacity-70 hover:ease-in hover:duration-300">
          <Link className="text-4xl" href="/blogs-and-streams">
            Blogs and Streams
          </Link>
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
            <Link className="text-4xl" href="/projects">
              Projects
            </Link>
          </li>
          <li className="text-[#bec8d1] mb-2 hover:opacity-70 hover:ease-in hover:duration-300">
            <Link className="text-4xl" href="/documentation">
              Documentation
            </Link>
          </li>
          <li className="text-[#bec8d1] mb-2 hover:opacity-70 hover:ease-in hover:duration-300">
            <Link className="text-4xl" href="/blogs-and-streams">
              Blogs and Streams
            </Link>
          </li>
          <li className="text-[#bec8d1] mb-2 hover:opacity-70 hover:ease-in hover:duration-300">
            <Link className="text-4xl" href="/Link>bout-me">
              About Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
