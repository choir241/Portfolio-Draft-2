import { cn } from "@/lib/utils";
import { Calendar} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Labels } from "../static/Labels";
interface ContactCardsProps {
  className?: string;
}

function CardComponent({
  title,
  description,
  content,
  button,
  calSize,
}: {
  title: string;
  description: string;
  content: string;
  button: string;
  calSize: number;
}) {
  return (
    <Card className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="mb-4 text-portfolio-secondary">
          <Calendar size={calSize} />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{content}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-portfolio-primary hover:bg-portfolio-primary/90">
          {button}
        </Button>
      </CardFooter>
    </Card>
  );
}

const ContactCards = ({ className }: ContactCardsProps) => {
  const contactCards = [
    Labels.contact.contactCardProject,
    Labels.contact.contactCardChat,
    Labels.contact.contactForStream,
  ];

  return (
    <article id="contact" className={cn("py-16", className)}>
      <section className="mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-portfolio-primary text-center mb-12">
          {Labels.contact.heading2}
        </h2>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactCards.map((card) => {
            return (
              <CardComponent
                calSize={28}
                title={card.title}
                description={card.description}
                content={card.content}
                button={card.button}
              />
            );
          })}
        </section>
      </section>
    </article>
  );
};

export default ContactCards;
