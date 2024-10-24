import Link from "next/link";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoGithub } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoTwitch } from "react-icons/io5";
import Image from "next/image";
import profile from "../assets/profile.png";

export default function Header() {
  return (
    <header className="pb-10 pt-16 min-[2400px]:pt-40">
      <section className="flex justify-center max-[1000px]:flex-col items-center max-[1000px]:pt-10">
        <div className="flex flex-col justify-center w-4/6 mr-2 p-2 pl-8">
          <h1 className="text-8xl mb-8 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
            Richard Choi
          </h1>

          <p className="text-4xl px-1 mt-6 mb-10 min-[2400px]:text-6xl min-[2400px]:leading-[6rem]">
            Located in NJ, I am a Technical Writer and Full Stack Developer.
          </p>

          <div className="flex max-[1000px]:items-center max-[1000px]:justify-center flex-col items-start">
            <div className="items-center flex mb-6">
            <Link
              href="https://github.com/choir241"
              className="text-[#86cecb] pr-6 flex items-center text-2xl hover:opacity-70 hover:ease-in hover:duration-300 min-[2400px]:text-6xl min-[2400px]:leading-[6rem] max-[800px]:pt-10"
            >
              <span className="hidden">Github Logo</span>
              <IoLogoGithub className="text-[#86cecb] text-5xl mr-4 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]" />
              My Github
            </Link>

            <Link
              href="https://www.linkedin.com/in/richard-choir/"
              className="text-[#86cecb] flex items-center text-2xl hover:opacity-70 hover:ease-in hover:duration-300 min-[2400px]:text-6xl min-[2400px]:leading-[6rem] max-[800px]:pt-10"
            >
              <span className="hidden">LinkedIn Logo</span>
              <IoLogoLinkedin className="text-[#86cecb] text-5xl mr-4 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]" />
              My LinkedIn
            </Link>
            </div>

            <div className="items-center flex">
            <Link
              href="https://x.com/choir241"
              className="text-[#86cecb] pr-6 flex items-center text-2xl hover:opacity-70 hover:ease-in hover:duration-300 min-[2400px]:text-6xl min-[2400px]:leading-[6rem] max-[800px]:pt-10"
            >
              <IoLogoTwitter className="text-[#86cecb] text-5xl mr-4 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]" />
              <span className="hidden">Twitter Logo</span>
              My Twitter
            </Link>

            <Link
              href="https://www.twitch.tv/choir241"
              className="text-[#86cecb] flex items-center text-2xl hover:opacity-70 hover:ease-in hover:duration-300 min-[2400px]:text-6xl min-[2400px]:leading-[6rem] max-[800px]:pt-10"
            >
              <span className="hidden">Twitch Logo</span>
              <IoLogoTwitch className="text-[#86cecb] text-5xl mr-4 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]" />
              My Twitch
            </Link>
          </div>
        </div>
        </div>

        <Image
          className="max-[800px]:px-10 pt-10 pr-10"
          priority={true}
          src={profile}
          alt="professional profile snapshot of Richard Choi"
        />
      </section>
    </header>
  );
}
