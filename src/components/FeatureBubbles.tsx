import { cn } from "@/lib/utils";
import { Labels } from "@/static/Labels";
interface FeatureBubblesProps {
  className?: string;
}

interface BubbleProps {
  title: string;
  className?: string;
  number: string;
}

const Bubble = ({ title, className, number }: BubbleProps) => (
  <div
    className={cn(
      "bubble animate-bubble-float flex flex-col items-center justify-center bg-portfolio-primary p-6 rounded-full border-2 border-portfolio-secondary w-32 h-32 md:w-40 md:h-40 text-center transition-transform hover:scale-105",
      className
    )}
  >
    <div className="font-bold text-portfolio-lightest">{number}</div>
    <h3 className="mb-[.5rem] font-bold text-portfolio-lightest">{title}</h3>
  </div>
);

const FeatureBubbles = ({ className }: FeatureBubblesProps) => {
  const bubbles = [
    {
      title: Labels.features.bubbleChat.title,
      number: Labels.features.bubbleChat.number
    },
    {
      title: Labels.features.bubbleMeetup.title,
      number: Labels.features.bubbleMeetup.number
    },
    {
      title: Labels.features.bubbleConference.title,
      number: Labels.features.bubbleConference.number
    },
    {
      title: Labels.features.bubbleCommit.title,
      number: Labels.features.bubbleCommit.number
    },
  ];
  return (
    <section className={cn("py-16 bg-white", className)}>
      <div className="mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-portfolio-primary text-center mb-12">
          {Labels.features.heading2}
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {bubbles.map((bubble) => {
            return(
              <Bubble
              number = {bubble.number}
              title = {bubble.title}
              />
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureBubbles;
