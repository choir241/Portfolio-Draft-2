import React, { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import "./carousel.css";
import { Labels } from "@/static/Labels";

interface ProjectCarouselProps {
  className?: string;
}

const ProjectCarousel = ({ className }: ProjectCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Sample project logos (for demonstration purposes)
  const projects = [
    Labels.projectCarousel.project1,
    Labels.projectCarousel.project2,
    Labels.projectCarousel.project3,
    Labels.projectCarousel.project4,
  ];

  interface IProject {
    name: string;
    logo: string;
    link: string;
    github: string;
  }

  // Check if user prefers reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (mediaQuery.matches && carouselRef.current) {
      const carousel = carouselRef.current.querySelector(".carousel-inner");
      if (carousel) {
        carousel.classList.remove("animate-scroll");
      }
    }
  }, []);

  function projectCarouselCard({ project }: { project: IProject }) {
    return (
      <a
        href={project.link}
        className="project border border-[#86cecb] drop-shadow-md drop-shadow-[#86cecb] hover:bg-[#bec8d1] card flex flex-col items-center"
      >
        <section
          key={project.name}
          className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg p-2 flex items-center justify-center"
        >
          <img
            src={project.logo}
            alt={project.name + " logo"}
            className="w-full h-full object-contain"
          />
        </section>
        <span className="projectName mt-2 text-sm text-portfolio-light">
          {project.name}
        </span>
      </a>
    );
  }

  return (
    <section
      className={cn("py-10 bg-portfolio-primary", className)}
      aria-label="Project Technologies"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-portfolio-lightest text-center">
        {Labels.projectCarousel.heading2}
      </h2>

      <section ref={carouselRef} className="carousel" aria-hidden="true">
        <div className="group">
          {projects.map((project) => projectCarouselCard({ project }))}
        </div>

        <div className="group">
          {projects.map((project) => projectCarouselCard({ project }))}
        </div>
      </section>
    </section>
  );
};

export default ProjectCarousel;
