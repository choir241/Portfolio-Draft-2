import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io5";
import Image from "next/image";
import profile from "../assets/profile.png";

export default function Header() {
  const socials = [
    {
      link: "https://github.com/choir27",
      textLogo: "Github Logo",
      logo: (
        <IoLogoGithub className="text-5xl ml-4 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]" />
      ),
    },
  ];

  return (
    <header className="p-2 pt-16 min-[2400px]:pt-40">
      <section className="flex justify-center max-[1000px]:flex-col items-center ">
        <div className="flex flex-col justify-center w-4/6 mr-2">
          <h1 className="text-8xl mb-8 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
            Richard Choi
          </h1>

          <p className="text-4xl px-1 mt-6 mb-10 min-[2400px]:text-6xl min-[2400px]:leading-[6rem]">
            Located in NJ, I am a Technical Writer and Full Stack Developer.
          </p>

          <div className="flex max-[1000px]:items-center max-[1000px]:justify-center">
            <Link
              href="https://github.com/choir27"
              className="text-white px-1 flex items-center text-2xl hover:opacity-70 hover:ease-in hover:duration-300 min-[2400px]:text-6xl min-[2400px]:leading-[6rem]"
            >
              <span className="hidden">Github Logo</span>
              My Github
              <IoLogoGithub className="text-5xl ml-4 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]" />
            </Link>

            <Link
              href="https://www.linkedin.com/in/richard-choir/"
              className="text-white px-3 flex items-center text-2xl hover:opacity-70 hover:ease-in hover:duration-300 min-[2400px]:text-6xl min-[2400px]:leading-[6rem]"
            >
              <span className="hidden">LinkedIn Logo</span>
              My LinkedIn
              <IoLogoLinkedin className="text-5xl ml-4 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]" />
            </Link>

            <Link
              href="https://x.com/choir241"
              className="text-white px-3 flex items-center text-2xl hover:opacity-70 hover:ease-in hover:duration-300 min-[2400px]:text-6xl min-[2400px]:leading-[6rem]"
            >
              <span className="hidden">Twitter Logo</span>
              My Twitter
              <IoLogoTwitter className="text-5xl ml-4 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]" />
            </Link>
          </div>
        </div>

        <Image
          className="max-[800px]:px-10 pt-10"
          priority={true}
          src={profile}
          alt="professional profile snapshot of Richard Choi"
        />
      </section>
    </header>
  );
}
