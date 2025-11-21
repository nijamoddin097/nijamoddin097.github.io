import { Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  initials: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      quote: "Nijamoddin demonstrates strong analytical thinking and attention to detail. His ability to transform complex data into actionable insights is impressive for someone at this stage of their career.",
      author: "Jane Smith",
      role: "Data Science Lead",
      initials: "JS",
    },
    {
      quote: "Working with Nijamoddin on the sales dashboard project was great. He showed dedication to understanding business requirements and delivered clear visualizations that stakeholders could actually use.",
      author: "Alex Kumar",
      role: "Business Analyst",
      initials: "AK",
    },
  ];

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Testimonials
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass rounded-xl p-8 card-hover reveal relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              
              <p className="text-foreground/90 mb-6 italic relative z-10">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border-2 border-primary">
                  <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 reveal">
          Note: Testimonials are placeholders. Replace with real references as they become available.
        </p>
      </div>
    </section>
  );
};

export default Testimonials;
