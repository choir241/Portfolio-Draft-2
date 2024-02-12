import Project from "../components/Project";
import "../css/global.css";
import styles from "../css/main.module.css";
import "../css/globalMediaQuery.css";
import priconnect from "../public/images/priconnect.png";
import echoStream from "../public/images/echostream.png";
import theRealEstate from "../public/images/therealestatebeast.png";
import autoAligners from "../public/images/autoaligners.png";

interface Project{
  projectName: string,
  codeURL: string,
  demoURL: string,
  projectIMG:  string,
  projectALT: string,
  projectTech:  string[],
  projectDescription: string,
}

export default function AllProjects() {

  const projects = [
    {
        projectName:"Priconnect",
        codeURL:"https://github.com/choir27/priconnect",
        demoURL:"https://priconnect.netlify.app/",
        projectIMG:priconnect.src,
        projectALT:"website landing page preview of Priconnect",
        projectTech:["TypeScript", "AppWrite", "Vite"],
        projectDescription:"Priconnect is a social media web application that allows users to create, like and comment posts.  Users can also interact with each other by replying on comments and follow other accounts to prioritize their posts.",
    },
  {
    projectName:"EchoStream",
    codeURL:"https://github.com/choir27/EchoStream",
    demoURL:"https://echostream.netlify.app/",
    projectIMG: echoStream.src,
    projectALT:"website landing page preview of EchoStream",
    projectTech:["Next", "TypeScript", "AppWrite"],
    projectDescription:"EchoStream is an audio service web application where users are able to add their own music tracks. Users can also create playlists where they add music tracks from various users, includings their own songs.",
  },
  {
    projectName:"AutoAligners",
    codeURL:"https://github.com/choir27/autoAligners",
    demoURL:"https://autoaligners.netlify.app/",
    projectIMG: autoAligners.src,
    projectALT:"website landing page preview of AutoAligners",
    projectTech: ["TypeScript", "AppWrite", "Vite"],
    projectDescription:"AutoAligners allows the client to reserve various car services and submit an estimate for a car service.  Employees are able to manage aspects of the client, ranging from the purchases they made, to the reservations they made."
    },
  {
  projectName:"The Real Estate Beast",
  codeURL:"https://github.com/choir27/The-Real-Estate-Beast",
  demoURL:"https://therealestatebeast.netlify.app",
  projectIMG: theRealEstate.src,
  projectALT:"website landing page preview of The Real Estate Beast",
  projectTech:["JS", "CSS", "HTML"],
  projectDescription:"The Real Estate Beast is a real estate website that demonstrates Carleton Badgers' history of satisfied clients, while also providing home value estimations and available homes for purchase.",
  }
  ]

  return (
      <section id="project">
        <h2>My Projects</h2>

        <section
          className={`${styles.flex} ${styles["justify-between"]} ${styles["flex-wrap"]} ${styles["align-center"]} projects`}
        >

          {
            projects.map((project: Project)=>{
              return(
                <Project
                key = {project.projectName}
                projectName = {project.projectName}
                codeURL= {project.codeURL}
                demoURL={project.demoURL}
                projectIMG={project.projectIMG}
                projectALT={project.projectALT}
                projectTech={project.projectTech}
                projectDescription={project.projectDescription}
                />
              )
            })
          }

        </section>
      </section>
  );
}
