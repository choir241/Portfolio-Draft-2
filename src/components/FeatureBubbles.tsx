import React from "react";
import { cn } from "@/lib/utils";
import { MessageSquare, Users, Calendar, GitCommit } from "lucide-react";
import { Labels } from "@/static/Labels";
interface FeatureBubblesProps {
  className?: string;
}

interface BubbleProps {
  icon: React.ReactNode;
  title: string;
  className?: string;
}

const Bubble = ({ icon, title, className }: BubbleProps) => (
  <div
    className={cn(
      "bubble animate-bubble-float flex flex-col items-center justify-center bg-portfolio-primary p-6 rounded-full border-2 border-portfolio-secondary w-32 h-32 md:w-40 md:h-40 text-center transition-transform hover:scale-105",
      className
    )}
  >
    <div className="mb-2 text-portfolio-secondary">{icon}</div>
    <h3 className="font-bold text-portfolio-lightest">{title}</h3>
  </div>
);

const FeatureBubbles = ({ className }: FeatureBubblesProps) => {
  const bubbles = [
    {
      icon: <MessageSquare size={24} />,
      title: Labels.features.bubbleChat.title,
    },
    {
      icon: <Users size={24} />,
      title: Labels.features.bubbleMeetup.title,
    },
    {
      icon: <Calendar size={24} />,
      title: Labels.features.bubbleConference.title,
    },
    {
      icon: <GitCommit size={24} />,
      title: Labels.features.bubbleCommit.title,
    },
  ];
  return (
    <section className={cn("py-16 bg-white", className)}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-portfolio-primary text-center mb-12">
          {Labels.features.heading2}
        </h2>

        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {bubbles.map((bubble) => {
            return(
              <Bubble
              icon = {bubble.icon}
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
