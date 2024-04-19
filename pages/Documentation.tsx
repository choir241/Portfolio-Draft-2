import documentation from "../assets/documentation.png";
import documentation1 from "../assets/documentation1.png";
import documentation2 from "../assets/documentation2.png";
import Image from "next/image";
import Link from "next/link";

export default function Documentation() {
  return (
    <section id="documentation" className="flex flex-col items-start pb-8">
      <h2 className="text-6xl my-12 px-5 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
        Documentation
      </h2>

      <p className="text-2xl px-6 pb-6 min-[2400px]:text-6xl min-[2400px]:leading-[6rem]">
        During the first couple weeks of October, I was tasked with the
        low-level research and presentation of the following topics: TypeScript,
        Next Webpack 5, Next App Routing, Zustand and Context API, and local
        storage, session storage, and local state. I also prepared and presented
        my findings to my team members, improving upon my documentation using
        the feedback and suggestions I received. I presented my finalized
        documentation after all its improvements and effectively demonstrated
        why our team should use the following for our application: TypeScript,
        Next Webpack 5, Next App Routing, Zustand and Context API, local
        storage, session storage, and local state. After my final presentation
        and being satisfied with both my presentation and my documentation, I
        publicly published my findings and research online.
      </p>
      <div className="flex justify-evenly items-center max-[800px]:flex-col">
        <Image
          src={documentation}
          alt=""
          className="w-1/4 max-[800px]:w-full max-[800px]:px-8"
        />
        <Image
          src={documentation1}
          alt=""
          className="w-1/4 max-[800px]:w-full max-[800px]:px-8"
        />
        <Image
          src={documentation2}
          alt=""
          className="w-1/4 max-[800px]:w-full max-[800px]:px-8"
        />
      </div>

      <Link
        href="https://choir.hashnode.dev/low-level-documentation"
        className="border-b-2 text-4xl pb-1 pt-8 mx-6 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
      >
        Documentation Link
      </Link>
    </section>
  );
}
