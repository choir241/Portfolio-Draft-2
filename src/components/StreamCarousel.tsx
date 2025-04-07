import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import "./carousel.css";
import { Labels } from "@/static/Labels";

interface StreamCarouselProps {
  className?: string;
}

const StreamCarousel = ({ className }: StreamCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Sample streams (for demonstration purposes)
  const streams = [
    Labels.streamCarousel.stream1,
    Labels.streamCarousel.stream2,
    Labels.streamCarousel.stream3,
    Labels.streamCarousel.stream4,
    Labels.streamCarousel.stream5,
    Labels.streamCarousel.stream6,
  ];

  interface IStream {
    title: string;
    host: string;
    image: string;
    link: string;
  }

  function streamCarouselCard({ stream }: { stream: IStream }) {
    return (
      <Card className="w-72 md:w-80 bg-white shadow-md overflow-hidden">
        <div className="relative h-40 w-full">
          <img
            src={stream.image}
            alt=""
            className="h-full w-full object-cover"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <a
              href={stream.link}
              className="hover:cursor-pointer rounded-full bg-white/20 p-3"
            >
              <Play size={24} className="text-white" />
            </a>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg">{stream.title}</h3>
          <p className="text-gray-600">{stream.host}</p>
        </div>
      </Card>
    );
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

  return (
    <section className={cn("py-16 bg-gray-50", className)}>
      <h2 className="text-2xl md:text-3xl font-bold text-portfolio-primary text-center">
        {Labels.streamCarousel.heading2}
      </h2>

      <section
        ref={carouselRef}
        className="carousel"
        aria-label="Recent streams carousel"
      >
        <div className="group">
          {streams.map((stream) => streamCarouselCard({ stream }))}
        </div>

        <div className="group">
          {streams.map((stream) => streamCarouselCard({ stream }))}
        </div>
      </section>
    </section>
  );
};

export default StreamCarousel;
