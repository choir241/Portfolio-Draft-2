import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import Image from "next/image";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Blog() {
  const blogs: IBlog[] = [
    {
      src: blog1,
      link: "https://dev.to/choir/my-journey-5eb3",
      title: "Journey",
    },
    {
    src: blog3,
    link: "https://dev.to/choir/conquering-fears-a-guide-to-an-empowered-developer-journey-20ib",
    title: "Empowerment",
    },
    {
      src: blog2,
      link: "https://dev.to/choir/my-personal-intro-to-tailwindcss-3il0",
      title: "TailwindCSS",
    },
  ];

  interface IBlog {
    src: string | StaticImport;
    link: string;
    title: string;
  }

  return (
    <section id="blog" className="flex flex-col items-start pb-8">
      <h2 className="text-6xl my-12 px-5 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
        Blogs
      </h2>
      <div className="flex justify-evenly items-center max-[800px]:flex-col">
        {blogs.map((blogObj: IBlog) => {
          return (
            <section key={blogObj.title} className="flex flex-col items-center">
              <Link
                target="_blank"
                className="flex justify-center"
                href={blogObj.link}
              >
                <Image
                  src={blogObj.src}
                  alt=""
                  className="w-3/4 max-[800px]:w-full max-[800px]:px-8"
                />
              </Link>
              <Link
                  href={blogObj.link}
                  className="border-b-2 border-b-black-700 text-2xl max-[1000px]:mb-2 pb-1 pt-2 mr-10 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
              >
                {blogObj.title} Blog
              </Link>
            </section>
          );
        })}
      </div>
    </section>
  );
}
