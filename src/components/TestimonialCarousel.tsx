import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Labels } from "@/static/Labels";
interface TestimonialCarouselProps {
  className?: string;
}

const testimonials = [
  Labels.testimonialCarousel.testimonial1,
];

const TestimonialCarousel = ({ className }: TestimonialCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    setActiveIndex((current) =>
      current === testimonials.length - 1 ? 0 : current + 1
    );
  };

  const goToPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  // Auto advance the carousel (with respect to reduced motion preferences)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mediaQuery.matches) {
      const intervalId = setInterval(goToNext, 8000);
      return () => clearInterval(intervalId);
    }
  }, []);

  interface ITestimonial {
    text: string;
    author: string;
    role: string;
  }

  function testimonialCarouselCard({
    testimonial,
    index,
  }: {
    testimonial: ITestimonial;
    index: number;
  }) {
    return (
      <Card
        className={cn(
          "bg-transparent border-none transition-opacity duration-500",
          index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
        )}
      >
        <CardContent className="text-center">
          <p className="text-lg md:text-xl text-portfolio-light mb-6">
            {testimonial.text}
          </p>
          <div>
            <div className="font-bold text-portfolio-secondary">
              {testimonial.author}
            </div>
            <div className="text-sm text-portfolio-light">
              {testimonial.role}
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <section className={cn("py-16 bg-portfolio-primary text-white h-full", className)}>
      <div className="mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-portfolio-lightest text-center mb-12">
          {Labels.testimonialCarousel.heading2}
        </h2>

        <div>
          {testimonials.map((testimonial, index) =>
            testimonialCarouselCard({ testimonial, index })
          )}
        </div>

        <section className="max-w-3xl mx-auto pt-8">
          <div className="flex justify-center gap-2 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary/20"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </Button>

            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-2 h-2 rounded-full p-0 min-w-0",
                  index === activeIndex
                    ? "bg-portfolio-secondary"
                    : "bg-portfolio-light/30 hover:bg-portfolio-light/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === activeIndex ? "true" : "false"}
              />
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary/20"
              aria-label="Next testimonial"
            >
              <ArrowRight size={18} />
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
