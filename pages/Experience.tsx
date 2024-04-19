import LJL from "../assets/linguisticsJusticeLeague2.png";
import Image from "next/image";
import realEstateBeast from "../assets/therealestatebeast.png";
import Link from "next/link";

export default function Experience() {
  return (
    <section id="experience" className="flex items-start flex-col">
      <h2 className="text-6xl my-12 px-5 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
        Experience
      </h2>

      <section>
        <h3 className="text-4xl my-12 px-10 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
          Non Profit Organizations
        </h3>
        <Image src={LJL} alt="" className="px-10" width={800} />
        <p className="text-2xl px-10 leading-10 mt-6 min-[2400px]:text-6xl min-[2400px]:leading-[6rem]">
          I designed various UI elements for applications and implemented the
          functionality for the backend, which improved the customer experience.
          Also, I suggested many changes to existing applications to either
          improve the design to be more user-friendly, debug existing bugs, or
          change any unwanted behavior to improve the user experience. Learned a
          new coding language like TypeScript, Python, and Firebase to make
          myself familiar with the code base to ensure that I could participate
          in updating the code and make additional suggestions for changes with
          additional knowledge and context.
        </p>
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

        <p className="text-2xl px-10 leading-10 min-[2400px]:text-6xl min-[2400px]:leading-[6rem]">
          Optimized render time by redirecting the videos to YouTube and
          decreasing the burden on the original site, increasing retention time
          for potential users. Established clear communications with the client
          and delivered a website with improved UI/UX features, increasing the
          potential customer population base. Tested the site responsiveness by
          experimenting with various design styles and adding them to the
          appropriate web elements to produce the desired result
        </p>
      </section>

      <section>
        <h3 className="text-4xl my-12 px-10 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
          Non-tech experience
        </h3>

        <p className="text-2xl px-10 leading-10 min-[2400px]:text-6xl min-[2400px]:leading-[6rem]">
          I was a Bank Teller at Northfield Bank located at Ewing NJ from 2019
          to March 2021. During my time there, I was able to increase sales by
          redirecting clients who were interested in purchasing bank product(s)
          to my bank supervisors, and by maintaining efficient and accurate bank
          telling service(s) to a variety of clients, I was able to keep the
          flow of customers moving. I also secured money for business clients
          using secure, government-mandated verification methods, guaranteeing
          returning clients and potential new clients. Through consistent and
          business-friendly customer relations, I managed to maintain customer
          revenue and business accounts.
        </p>
      </section>
    </section>
  );
}
