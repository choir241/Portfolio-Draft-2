import project1 from "../../assets/gridiron_proj.png";
import project2 from "../../assets/therealestatebeast.png";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import Image from "next/image";

export default function Projects() {
  interface IProject {
    src: string | StaticImport;
    link: string;
    description: string;
    github: string;
    title: string;
  }

  const projects: IProject[] = [
    {
      title: "Gridiron Survivor",
      description:
        "A NFL football survivor pool application. Users pick a team each week before the set deadline within each created entry. The admin is able to send email notifications to the users within the league to remind them to make a pick. The goal is to be the last player standing in your respective league. Using Agile methodologies, I worked as the frontend and backend developer, and the technical writer on Gridiron Survivor with a team of developers to build a full-stack application. From a remote-only setting, I collaborated and communicated with the frontend and backend teams to debug problems of varying priority levels.",
      github: "https://github.com/LetsGetTechnical/gridiron-survivor",
      link: "https://www.gridironsurvivor.com/",
      src: project1,
    }
  ];

  return (
    <section id="blog" className="flex flex-col items-start py-8 w-full">
      <h2 className="text-6xl my-12 px-5 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]">
        Projects I've worked on
      </h2>

      <div className="flex justify-center items-center flex-col w-full mb-8">
        {projects.map((project: IProject)=>{
          return(
             <section key={project.title} className="mt-10 flex flex-col items-center justify-center">
             <Link
               target="_blank"
               className="flex justify-center"
               href={project.link}
             >
               <Image src={project.src} alt="" width={400} />
             </Link>
   
             <p className="my-4 px-6">{project.description}</p>
             <div className="flex justify-center pb-6">
               <Link
                 href={project.link}
                 target="_blank"
                 className="flex border-[#86cecb] mt-2 border-b-2 border-b-black-700 text-2xl max-[1000px]:mb-2 pb-1 pt-2 mr-10 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
               >
                 {project.title}
               </Link>
   
               <Link
                 href={project.github}
                 target="_blank"
                 className="flex border-[#86cecb] mt-2 border-b-2 border-b-black-700 text-2xl max-[1000px]:mb-2 pb-1 pt-2 mr-10 hover:pb-3 hover:ease-in hover:duration-300 min-[2400px]:text-8xl min-[2400px]:leading-[6rem]"
               >
                 The code
               </Link>
             </div>
           </section>
          )
        })}
      </div>
    </section>
  );
}
