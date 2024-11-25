import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";
import blog4 from "../../assets/blog4.png";
import blog5 from "../../assets/blog5.png";
import blog6 from "../../assets/blog6.png";
import Image from "next/image";
import Link from "next/link";
import stream1 from "../../assets/stream.png";
import stream2 from "../../assets/stream1.png";
import stream3 from "../../assets/stream3.jpg";
import stream4 from "../../assets/that_stream.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Blog() {

  const blogs: IBlog[] = [
    {
      src: blog4,
      link: "https://dev.to/choir241/consistency-is-king-and-heres-why-5ean",
      title: "Consistency",
    },
    {
      src: blog3,
      link: "https://dev.to/choir/conquering-fears-a-guide-to-an-empowered-developer-journey-20ib",
      title: "Empowerment",
    },
  ];

  const blogs1: IBlog[] = [
    {
      src: blog2,
      link: "https://dev.to/choir/my-personal-intro-to-tailwindcss-3il0",
      title: "TailwindCSS",
    },
    {
      src: blog1,
      link: "https://dev.to/choir/my-journey-5eb3",
      title: "Journey",
    },
  ];

  const blogs2: IBlog[] = [
    {
    src: blog5,
    link: "https://dev.to/choir241/zero-to-hero-building-a-full-stack-app-with-propelauth-vite-typescript-express-and-mongodb-234d",
    title: "Propel Auth"
    },
    {
    src: blog6,
    link: "https://dev.to/choir241/my-thoughts-on-pieces-3cmc",
    title: "Pieces"
    }
  ];

  interface IBlog {
    src: string | StaticImport;
    link: string;
    title: string;
  }

  interface IStream extends IBlog {
    altlink: React.JSX.Element;
  }

  const streams: IStream[] = [
    {
      src: stream1,
      altlink: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/KiWx5bwNEyE?si=vk13WJnLd39ZEVmk"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ),
      link: "https://www.youtube.com/watch?v=KiWx5bwNEyE&t=2569s&ab_channel=RyanFurrer",
      title: "Ryan Furrer",
    },
    {
      src: stream3,
      altlink: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/OX_ZFspRX6w?si=VBDyWlinwXp9Mle1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ),
      link: "https://www.youtube.com/watch?v=OX_ZFspRX6w&ab_channel=CodingwithShashi",
      title: "Gridiron Survivor",
    },
  ];

  const streams1: IStream[] = [
    {
      src: stream2,
      altlink: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4CEynrl8xaw?si=fqT_Ucc5qEcBJP9H"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ),
      link: "https://www.youtube.com/watch?v=4CEynrl8xaw&ab_channel=PiecesforDevelopers",
      title: "Pieces",
    },
    {
      src: stream4,
      altlink: (
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wf56WT_rO_A?si=OyN2L9G7G1mnSKuD&amp;start=16717"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      ),
      link: "https://www.youtube.com/watch?v=wf56WT_rO_A&t=16717s&ab_channel=ThatConference",
      title: "THAT Conference",
    },
  ];

  const streams2: IStream[] = [
    {
    src: stream4,
    altlink: (
      <iframe width="560" height="315" src="https://www.youtube.com/embed/wcJVHQJQXzg?si=uLdErYuc3rYe1gGF" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    ),
    link: "https://www.youtube.com/watch?v=wcJVHQJQXzg&ab_channel=KrishCodes",  
    title: "Podcast 404"
  }
  ];

  return (
    <section id="blog" className="flex flex-col items-start py-8 w-full">
      <h2 className="text-6xl my-12 px-5 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
        My Blogs
      </h2>

      <div className="flex justify-evenly items-center max-[800px]:flex-col w-full mb-8">
        {blogs.map((blogObj: IBlog) => {
          return (
            <section
              key={blogObj.title}
              className="mt-10 flex flex-col items-center"
            >
              <Link
                target="_blank"
                className="flex justify-center"
                href={blogObj.link}
              >
                <Image src={blogObj.src} alt="" width={400} />
              </Link>
              <Link
                href={blogObj.link}
                target="_blank"
                className="border-[#86cecb] mt-2 border-b-2 border-b-black-700 text-2xl max-[1000px]:mb-2 pb-1 pt-2 mr-10 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
              >
                {blogObj.title} Blog
              </Link>
            </section>
          );
        })}
      </div>

      <div className="flex justify-evenly items-center max-[800px]:flex-col w-full mb-8">
        {blogs1.map((blogObj: IBlog) => {
          return (
            <section
              key={blogObj.title}
              className="mt-10 flex flex-col items-center"
            >
              <Link
                target="_blank"
                className="flex justify-center"
                href={blogObj.link}
              >
                <Image src={blogObj.src} alt="" width={400} />
              </Link>
              <Link
                target="_blank"
                href={blogObj.link}
                className="border-[#86cecb] mt-2 border-b-2 border-b-black-700 text-2xl max-[1000px]:mb-2 pb-1 pt-2 mr-10 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
              >
                {blogObj.title} Blog
              </Link>
            </section>
          );
        })}
      </div>

      <div className="flex justify-evenly items-center max-[800px]:flex-col w-full mb-8">
        {blogs2.map((blogObj: IBlog) => {
          return (
            <section
              key={blogObj.title}
              className="mt-10 flex flex-col items-center"
            >
              <Link
                target="_blank"
                className="flex justify-center"
                href={blogObj.link}
              >
                <Image src={blogObj.src} alt="" width={400} />
              </Link>
              <Link
                target="_blank"
                href={blogObj.link}
                className="border-[#86cecb] mt-2 border-b-2 border-b-black-700 text-2xl max-[1000px]:mb-2 pb-1 pt-2 mr-10 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
              >
                {blogObj.title} Blog
              </Link>
            </section>
          );
        })}
      </div>

      <h2 className="text-6xl my-12 px-5 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
        Streams I have been on
      </h2>

      <div className="flex items-center max-[600px]:flex-col w-full justify-evenly mb-16">
        {streams.map((streamObj: IStream) => {
          return (
            <section
              className="mt-10 flex flex-col justify-center items-center"
              key={streamObj.title}
            >
              {streamObj.altlink}
            </section>
          );
        })}
      </div>

      <div className="flex items-center max-[600px]:flex-col w-full justify-evenly mb-16">
        {streams1.map((streamObj: IStream) => {
          return (
            <section
              className="mt-10 flex flex-col justify-center items-center"
              key={streamObj.title}
            >
              {streamObj.altlink}
            </section>
          );
        })}
      </div>

      <div className="flex items-center max-[600px]:flex-col w-full justify-evenly">
        {streams2.map((streamObj: IStream) => {
          return (
            <section
              className="mt-10 flex flex-col justify-center items-center"
              key={streamObj.title}
            >
              {streamObj.altlink}
            </section>
          );
        })}
      </div>
    </section>
  );
}
