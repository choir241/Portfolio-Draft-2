import Project from "../pages/Project";
import Documentation from "../pages/Documentation";
import OpenSource from "../pages/OpenSource";
import AboutMe from "../pages/AboutMe";
import Experience from "../pages/Experience";
import LookingForward from "../pages/LookingForward";

export default function Home() {
  return (
    <main>
      <Project />

      <Documentation />

      <OpenSource />

      <Experience />

      <LookingForward />

      <AboutMe />
    </main>
  );
}
