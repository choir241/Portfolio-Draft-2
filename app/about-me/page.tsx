import drawing1 from "../../assets/drawing1.jpg";
import drawing2 from "../../assets/drawing2.jpg";
import codeAndCoffee from "../../assets/CodeAndCoffee.png";
import storybook from "../../assets/storybook.png";
import chat1 from "../../assets/chat1.png";
import chat2 from "../../assets/chat2.png";
import conference1 from "../../assets/conference1.png";
import conference2 from "../../assets/conference2.png";
import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="aboutMe" className="my-4">
      <h2 className="text-6xl my-12 px-5 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
        About Me
      </h2>

      <ul className="pb-10 px-6 max-[1000px]:flex max-[1000px]:flex-col max-[1000px]:items-center max-[1000px]:px-10">
        <li className="list-disc ml-10 text-2xl leading-10 min-[2400px]:text-6xl min-[2400px]:leading-[6rem]">
          I love to take walks outside, it is a great way to clear my head and
          it's a great break from the screen.
        </li>
        <li className="list-disc ml-10 text-2xl leading-10 min-[2400px]:text-6xl min-[2400px]:leading-[6rem]">
          Exercising, cardio, and working out are daily activities I use to
          regulate my stress while also being a great method to wake up.
        </li>
        <li className="list-disc ml-10 text-2xl leading-10 min-[2400px]:text-6xl min-[2400px]:leading-[6rem]">
          I love to draw, it is a passion of mine and it is something I continue
          to work and improve on, just like coding.
        </li>

        <li className="list-disc ml-10 text-2xl leading-10 min-[2400px]:text-6xl min-[2400px]:leading-[6rem]">
          By getting to meet new people in tech and catching up with friends at
          meetups, not only do I have fun by being with amazing people, but I
          get to talk about the tech world and coding.
        </li>
        <li></li>
      </ul>

      <div className="flex flex-wrap justify-evenly items-center flex-col">
        <h3 className="text-6xl my-6 px-5 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
          My drawings
        </h3>
        <div className="w-full flex justify-evenly min-[2400px]:w-full mb-16">
          <Image
            src={drawing1}
            alt="my drawing of Miko Ino from the anime Kaguya-sama: Love is War"
            width={800}
            className="mt-8 w-2/5"
          />
          <Image
            src={drawing2}
            alt="my drawing of Megumin from the anime Konosuba"
            width={800}
            className="mt-8 w-2/5"
          />
        </div>

        <h3 className="text-6xl my-6 px-5 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
          Going to Meetups
        </h3>
        <div className="w-full flex justify-evenly min-[2400px]:w-full mb-16">
          <Image
            src={codeAndCoffee}
            alt="linknedIn post of code and coffee meetup"
            width={600}
            className="mt-8 w-2/5"
          />
          <Image
            src={storybook}
            alt="linkedIn post of storybook meetup"
            width={600}
            className="mt-8 w-2/5"
          />
        </div>

        <h3 className="text-6xl my-6 px-5 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
          My Coffee Chats
        </h3>
        <div className="flex justify-evenly w-full min-[2400px]:w-full mb-16">
          <Image
            src={chat1}
            alt="linkedIn post of storybook meetup"
            width={600}
            className="mt-8 w-2/5"
          />
          <Image
            src={chat2}
            alt="linkedIn post of storybook meetup"
            width={600}
            className="mt-8 w-2/5"
          />
        </div>

        <h3 className="text-6xl my-6 px-5 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
          Going to Conferences
        </h3>
        <div className="flex justify-evenly w-full min-[2400px]:w-full min-[2400px]:mb-6">
          <Image
            src={conference1}
            alt="linkedIn post of storybook meetup"
            width={600}
            className="mt-8 w-2/5"
          />
          <Image
            src={conference2}
            alt="linkedIn post of storybook meetup"
            width={600}
            className="mt-8 w-2/5"
          />
        </div>
      </div>
    </section>
  );
}
