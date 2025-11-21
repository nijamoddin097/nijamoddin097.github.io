import { BookOpen, Code, Database, TrendingUp } from "lucide-react";

const About = () => {
  const learningPath = [
    { name: "SQL", icon: Database },
    { name: "Pandas", icon: Code },
    { name: "Power BI", icon: TrendingUp },
    { name: "ML basics", icon: BookOpen },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="glass rounded-2xl p-8 md:p-12 card-hover reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-foreground/90 max-w-4xl mx-auto">
            <p>
              I'm <span className="text-primary font-semibold">Nijamoddin Hakkam</span>, an aspiring data analyst driven by curiosity and an urge to turn messy data into actionable insights. I'm passionate about modern analytics and new technologies, loyal to my work, and strong at solving problems and applying solutions in practice.
            </p>
            
            <p>
              Currently building skills in <span className="text-secondary font-semibold">SQL, Python, Excel, and practical machine learning</span> to deliver measurable impact.
            </p>

            {/* Learning Timeline */}
            <div className="mt-10 pt-10 border-t border-border">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Learning Focus
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {learningPath.map((item, index) => (
                  <div 
                    key={item.name}
                    className="glass rounded-lg p-4 text-center card-hover"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <p className="font-medium">{item.name}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-muted-foreground">
                {learningPath.map((_, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-primary"></div>
                    {index < learningPath.length - 1 && (
                      <div className="w-8 h-0.5 bg-primary/30 mx-1"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
