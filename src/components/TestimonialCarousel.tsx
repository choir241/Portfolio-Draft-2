import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Labels } from "@/static/Labels";
import { useIsMobile } from "@/hooks/use-mobile";
interface TestimonialCarouselProps {
  className?: string;
}

const testimonials = [
  Labels.testimonialCarousel.testimonial1,
  Labels.testimonialCarousel.testimonial2,
];

const TestimonialCarousel = ({ className }: TestimonialCarouselProps) => {
  const isMobile = useIsMobile();
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 1;
  const [expanded, setExpanded] = useState(false);

  const effectiveItemsPerPage = isMobile ? 1 : itemsPerPage;

  // Calculate total pages
  const totalPages = Math.ceil(testimonials.length / effectiveItemsPerPage);

  // Get current page items
  const currentTestimonials = testimonials.slice(
    currentPage * effectiveItemsPerPage,
    (currentPage + 1) * effectiveItemsPerPage
  );

  // Navigation handlers
  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  // Calculate pagination indicators
  const pageIndicators = Array.from({ length: totalPages }, (_, i) => i);

  interface ITestimonial {
    text: string;
    author: string;
    role: string;
  }

  function testimonialCarouselCard({
    testimonial,
  }: {
    testimonial: ITestimonial;
  }) {
    const displayContent = expanded
      ? testimonial.text
      : testimonial.text.length > 450
      ? `${testimonial.text.substring(0, 450)}...`
      : testimonial.text;

    return (
      <Card
        className={cn(
          `flex flex-col items-center h-full bg-transparent border-none transition-opacity duration-500`
        )}
      >
        <CardContent className="text-center">
          <p
            className={cn(
              "text-lg md:text-xl text-portfolio-lightest mb-6",
              !expanded && "line-clamp-4"
            )}
          >
            {displayContent}
          </p>

          <div>
            <div className="font-bold text-portfolio-lightest">
              {testimonial.author}
            </div>
            <div className="text-sm text-portfolio-lightest">
              {testimonial.role}
            </div>
          </div>
        </CardContent>

        {testimonial.text.length > 450 && (
          <CardFooter className="pt-0">
            <Button
              size="sm"
              onClick={() => setExpanded(!expanded)}
              className="bg-transparent hover:bg-portfolio-secondary/10 text-portfolio-lightest border border-portfolio-secondary px-6 py-3 rounded focus:outline-none focus:ring-2 focus:ring-portfolio-secondary transition-colors"
            >
              {expanded ? "Show less" : "Read more"}
            </Button>
          </CardFooter>
        )}
      </Card>
    );
  }

  return (
    <section className={cn("py-16 bg-portfolio-primary text-white", className)}>
      <div className="mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-portfolio-lightest text-center mb-12">
          {Labels.testimonialCarousel.heading2}
        </h2>

        <div className="gap-6">
          {currentTestimonials.map((testimonial) => (
            <div className="animate-fade-in">
              {testimonialCarouselCard({ testimonial })}
            </div>
          ))}
        </div>

        <section className="max-w-3xl mx-auto pb-16">
          <div className="flex justify-center gap-2 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevPage}
              className="rounded-full border-portfolio-secondary text-portfolio-secondary hover:bg-portfolio-secondary/20"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={18} />
            </Button>

            {pageIndicators.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage(index)}
                className={cn(
                  "w-2 h-2 rounded-full p-0 min-w-0",
                  index === currentPage
                    ? "bg-portfolio-secondary"
                    : "bg-portfolio-light/30 hover:bg-portfolio-light/50"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
                aria-current={index === currentPage ? "true" : "false"}
              />
            ))}

            <Button
              variant="outline"
              size="icon"
              onClick={goToNextPage}
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
