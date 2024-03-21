import Project, { Content } from "../components/Project";
import styles from "../css/main.module.css";
import priconnect from "../public/images/priconnect.png";
import echoStream from "../public/images/echostream.png";
import theRealEstate from "../public/images/therealestatebeast.png";
import autoAligners from "../public/images/autoaligners.png";
import gridIron from "../public/images/gridIron.jpg";
import GridIron, { GridIronVods } from "../components/GridIron";

export default function AllProjects() {
  const projects = [
    {
      projectName: "Priconnect",
      codeURL: "https://github.com/choir27/priconnect",
      demoURL: "https://priconnect.netlify.app/",
      projectIMG: priconnect.src,
      projectALT: "website landing page preview of Priconnect",
      projectTech: ["TypeScript", "AppWrite", "Vite"],
      projectDescription:
        "Priconnect is a social media web application that allows users to create, like and comment posts.  Users can also interact with each other by replying on comments and follow other accounts to prioritize their posts.",
    },
    {
      projectName: "EchoStream",
      codeURL: "https://github.com/choir27/EchoStream",
      demoURL: "https://echostream.netlify.app/",
      projectIMG: echoStream.src,
      projectALT: "website landing page preview of EchoStream",
      projectTech: ["Next", "TypeScript", "AppWrite"],
      projectDescription:
        "EchoStream is an audio service web application where users are able to add their own music tracks. Users can also create playlists where they add music tracks from various users, includings their own songs.",
    },
    // {
    //   projectName: "AutoAligners",
    //   codeURL: "https://github.com/choir27/autoAligners",
    //   demoURL: "https://autoaligners.netlify.app/",
    //   projectIMG: autoAligners.src,
    //   projectALT: "website landing page preview of AutoAligners",
    //   projectTech: ["TypeScript", "AppWrite", "Vite"],
    //   projectDescription:
    //     "AutoAligners allows the client to reserve various car services and submit an estimate for a car service.  Employees are able to manage aspects of the client, ranging from the purchases they made, to the reservations they made.",
    // },
    {
      projectName: "The Real Estate Beast",
      codeURL: "https://github.com/choir27/The-Real-Estate-Beast",
      demoURL: "https://therealestatebeast.netlify.app",
      projectIMG: theRealEstate.src,
      projectALT: "website landing page preview of The Real Estate Beast",
      projectTech: ["JS", "CSS", "HTML"],
      projectDescription:
        "The Real Estate Beast is a real estate website that demonstrates Carleton Badgers' history of satisfied clients, while also providing home value estimations and available homes for purchase.",
    },
  ];

  const gridIronVods = [
    {
      h3: "Development Technical Presentations: Gridiron Survivor Project Linting and Accessibility Pt 1",
      videoLink:
        "https://www.youtube.com/watch?v=JfLfIKMgnDQ&t=693s&ab_channel=CodingwithShashi",
      projectIMG: gridIron.src,
      projectALT: "",
      videoDescription: "",
    },
    {
      h3: "Development Technical Presentations: Gridiron Survivor Project Prettier and Accessibility Pt 2",
      videoLink:
        "https://www.youtube.com/watch?v=O6rnTPob7VY&ab_channel=CodingwithShashi",
      projectIMG: gridIron.src,
      projectALT: "",
      videoDescription: "",
    },
    {
      h3: "Design Kickoff: Gridiron Survivor",
      videoLink:
        "https://www.youtube.com/watch?v=O6rnTPob7VY&ab_channel=CodingwithShashi",
      projectIMG: gridIron.src,
      projectALT: "",
      videoDescription: "",
    },
    {
      h3: "",
      videoLink: "",
      projectIMG: "",
      linkedIn: (
        <iframe
          src="https://www.linkedin.com/embed/feed/update/urn:li:share:7169105672544903168"
          height="679"
          width="504"
          frameBorder="0"
          allowFullScreen={false}
          title="Embedded post"
        ></iframe>
      ),
      projectALT: "",
      videoDescription: "",
    },
  ];

  return (
    <section id="project">
      <h2>My Projects</h2>

      <section
        className={`${styles.flex} ${styles["justify-between"]} ${styles["flex-wrap"]} ${styles["align-center"]} projects`}
      >
        {projects.map((project: Content) => {
          return (
            <Project
              key={project.projectName}
              projectName={project.projectName}
              codeURL={project.codeURL}
              demoURL={project.demoURL}
              projectIMG={project.projectIMG}
              projectALT={project.projectALT}
              projectTech={project.projectTech}
              projectDescription={project.projectDescription}
            />
          );
        })}
      </section>
      <h2>GridIron</h2>

      <section
        className={`${styles.flex} ${styles["justify-between"]} ${styles["flex-wrap"]} ${styles["align-center"]} projects`}
      >
        {gridIronVods.map((vods: GridIronVods) => {
          return (
            <GridIron
              key={vods.videoLink}
              h3={vods.h3}
              linkedIn={vods.linkedIn}
              videoLink={vods.videoLink}
              projectIMG={vods.projectIMG}
              projectALT={vods.projectALT}
              videoDescription={vods.videoDescription}
            />
          );
        })}
      </section>
    </section>
  );
}
