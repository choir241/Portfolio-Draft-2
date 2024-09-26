import LJL from "../assets/linguisticsJusticeLeague2.png";
import Image from "next/image";
import realEstateBeast from "../assets/therealestatebeast.png";
import Link from "next/link";
import Gridiron from "../assets/gridiron.png";

export default function Experience() {
  return (
    <section id="experience" className="flex items-start flex-col">
      <h2 className="text-6xl my-12 px-5 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
        Experience
      </h2>

      <section className="flex">
        <div className="w-full">
          <h3 className="text-4xl my-12 px-10 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
            Appwrite
          </h3>
          <h4 className="text-2xl my-12 px-10 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
            Technical Writer Intern
          </h4>
          <div className="px-10 flex flex-col justify-center items-start w-full">
            <Link
              href="https://github.com/appwrite/website/pull/1087"
              className="border-b-2 border-b-black-700 text-4xl max-[1000px]:mb-2 pb-1 pt-2 mr-10 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
            >
              Local dev docs
            </Link>

            <Link
              href="https://github.com/appwrite/website/pull/1079"
              className="border-b-2 border-b-black-700 text-4xl max-[1000px]:mb-2 pb-1 pt-2 mr-10 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
            >
              CLI 2.0 docs
            </Link>

            <Link
              className="border-b-2 border-b-black-700 text-4xl max-[1000px]:mb-2 pb-1 pt-2 mr-10 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
              href="https://github.com/appwrite/website/pulls?q=is%3Apr+author%3Achoir27+is%3Aclosed+"
            >
              My contributions
            </Link>
          </div>
        </div>

        <div className="px-10 flex flex-col justify-center items-start w-full">
          <Image
            src={Gridiron}
            alt="GridIron preview thumbnail of all team members"
            width={800}
            className="px-10"
          />

          <div className="mb-6 pt-10 px-10 flex-col flex items-start">
            <Link
              href="https://www.gridironsurvivor.com/"
              className="border-b-2 border-b-black-700 text-4xl max-[1000px]:mb-2 pb-1 pt-2 mr-10 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
            >
              Project Demo
            </Link>

            <Link
              href="https://github.com/LetsGetTechnical/gridiron-survivor"
              className="border-b-2 border-b-black-700 text-4xl pb-1 pt-2 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
            >
              Code URL
            </Link>
          </div>
        </div>
      </section>

      <section className="flex">
        <section>
          <h3 className="text-4xl my-12 px-10 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
            Non Profit Organizations
          </h3>
          <h4 className="text-2xl my-12 px-10 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
            Frontend Engineer
          </h4>
          <Image src={LJL} alt="" className="px-10" width={800} />
        </section>

        <section>
          <h3 className="text-4xl my-12 px-10 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
            Freelance
          </h3>
          <Image src={realEstateBeast} alt="" className="px-10" width={800} />
          <div className="mb-6 pt-6 px-10 max-[1000px]:flex-col max-[1000px]:flex items-start">
            <Link
              href="https://therealestatebeast.netlify.app/"
              className="border-b-2 border-b-black-700 text-4xl max-[1000px]:mb-2 pb-1 pt-2 mr-10 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
            >
              Project Demo
            </Link>
            <Link
              href="https://github.com/choir27/The-Real-Estate-Beast"
              className="border-b-2 border-b-black-700 text-4xl pb-1 pt-2 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
            >
              Code URL
            </Link>
          </div>
        </section>
      </section>
    </section>
  );
}
