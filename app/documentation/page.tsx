import documentation from "../../assets/documentation.png";
import documentation1 from "../../assets/documentation1.png";
import documentation2 from "../../assets/documentation2.png";
import appwrite1 from "../../assets/appwrite1.png";
import appwrite2 from "../../assets/appwrite2.png";
import appwrite3 from "../../assets/appwrite3.png";
import Image from "next/image";
import Link from "next/link";

export default function Documentation() {
  const links = [
    {
      link: "https://appwrite.io/docs/tooling/command-line/collections",
      title: "CLI Collection",
    },
    {
      link: "https://appwrite.io/docs/tooling/command-line/functions",
      title: "CLI Function",
    },
    {
      link: "https://appwrite.io/docs/tooling/command-line/teams",
      title: "CLI Team",
    },
    {
      link: "https://appwrite.io/docs/tooling/command-line/topics",
      title: "CLI Topic",
    },
    {
      link: "https://appwrite.io/docs/tooling/command-line/buckets",
      title: "CLI Bucket",
    },
    {
      link: "https://appwrite.io/docs/products/functions/develop-locally",
      title: "Develop Locally",
    },
    {
      link: "https://appwrite.io/docs/advanced/platform/shortcuts",
      title: "Keyboard Shortcuts",
    },
    { link: "https://appwrite.io/docs/tooling/appwriter", title: "Appwriter" },
  ];

  return (
    <section id="documentation" className="flex flex-col items-start pb-8">
      <h2 className="text-6xl my-12 px-5 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
        Documentation I have worked on:
      </h2>

      <div className="flex justify-evenly items-center max-[800px]:flex-col">
        <Link
          href="https://choir.hashnode.dev/low-level-documentation"
          className="border-b-2 text-4xl pb-1 pt-8 mx-6 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
        >
          <Image
            src={documentation}
            alt=""
            className="max-[800px]:w-full max-[800px]:px-8"
          />
        </Link>

        <Link
          href="https://choir.hashnode.dev/low-level-documentation"
          className="border-b-2 text-4xl pb-1 pt-8 mx-6 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
        >
          <Image
            src={documentation1}
            alt=""
            className="max-[800px]:w-full max-[800px]:px-8"
          />
        </Link>

        <Link
          href="https://choir.hashnode.dev/low-level-documentation"
          className="border-b-2 text-4xl pb-1 pt-8 mx-6 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
        >
          <Image
            src={documentation2}
            alt=""
            className="max-[800px]:w-full max-[800px]:px-8"
          />
        </Link>
      </div>

      <Link
        href="https://choir.hashnode.dev/low-level-documentation"
        className="border-b-2 text-4xl pb-1 pt-8 mx-6 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
      >
        Documentation Link
      </Link>

      <div className="mt-20 w-full flex justify-evenly items-center max-[800px]:flex-col">
        <Link
          className="border-b-2 text-4xl pb-1 pt-8 mx-6 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
          href="https://appwrite.io/docs/tooling/command-line/buckets"
        >
          <Image src={appwrite1} alt="" className="w-4/5" />
        </Link>

        <Link
          className="border-b-2 text-4xl pb-1 pt-8 mx-6 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
          href="https://appwrite.io/docs/tooling/appwriter"
        >
          <Image src={appwrite2} alt="" className="w-4/5" />
        </Link>

        <Link
          className="border-b-2 text-4xl pb-1 pt-8 mx-6 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
          href="https://appwrite.io/docs/products/functions/develop-locally"
        >
          <Image src={appwrite3} alt="" className="w-4/5" />
        </Link>
      </div>

      <h2 className=" mt-20 text-6xl px-5 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
        Appwrite Documentation I worked on:
      </h2>
      <div className=" w-full flex flex-wrap justify-evenly items-center max-[800px]:flex-col">
        {links.map((ele) => {
          return (
            <Link
              key={ele.link}
              href={ele.link}
              className="border-b-2 text-4xl pb-1 pt-8 mx-6 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
            >
              {ele.title}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
