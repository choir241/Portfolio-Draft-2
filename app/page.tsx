import React from "react";
import Header from "../components/Header";
import Project from "../components/Project";
import Nav from "../components/Nav";
import "../assets/css/global.css";
import styles from "../assets/css/main.module.css";
import "../assets/css/globalMediaQuery.css";
import echoStream from "../images/echostream.png";
import autoAligners from "../images/autoaligners.png";
import priconnect from "../images/priconnect.png";

export default function Home() {
  return (
    <main>
      <Nav />

      <Header />

      <section id="project">
        <h3>My Projects</h3>

        <section
          className={`${styles.flex} ${styles["justify-between"]} ${styles["flex-wrap"]} ${styles["align-center"]} projects`}
        >
          <Project
            projectName="AutoAligners"
            codeURL="https://github.com/choir27/autoAligners"
            demoURL="https://autoaligners.netlify.app/"
            projectIMG={autoAligners.src}
            projectALT="website landing page preview of AutoAligners"
            projectTech={["TypeScript", "AppWrite", "Vite"]}
            projectDescription="AutoAligners allows the client to reserve various car services and submit an estimate for a car service.  Employees are able to manage aspects of the client, ranging from the purchases they made, to the reservations they made."
          />

          <Project
            projectName="Priconnect"
            codeURL="https://github.com/choir27/priconnect"
            demoURL="https://pri-connect.netlify.app/"
            projectIMG={priconnect.src}
            projectALT="website landing page preview of Priconnect"
            projectTech={["TypeScript", "AppWrite", "Vite"]}
            projectDescription="Priconnect is a social media web application that allows users to create, like and comment posts.  Users can also interact with each other by replying on comments and follow other accounts to prioritize their posts."
          />

          <div className="flex justify-center">
            <Project
              classNames="width-100"
              projectName="EchoStream"
              codeURL="https://github.com/choir27/EchoStream"
              demoURL="https://echostream.netlify.app/"
              projectIMG={echoStream.src}
              projectALT="website landing page preview of EchoStream"
              projectTech={["Next", "TypeScript", "AppWrite"]}
              projectDescription="EchoStream is an audio service web application where users are able to add their own music tracks. Users can also create playlists where they add music tracks from various users, includings their own songs."
            />
          </div>
        </section>
      </section>
    </main>
  );
}
