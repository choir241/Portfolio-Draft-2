import Blog from "../pages/Blogs";
import Documentation from "../pages/Documentation";
import AboutMe from "../pages/AboutMe";
import Experience from "../pages/Experience";

export default function Home() {
  return (
    <main>
      <Experience />

      <Blog/>

      <Documentation />

      <AboutMe/>
    </main>
  );
}
