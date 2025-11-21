import { useEffect, useRef, useState } from "react";
import { Code2, Database, LineChart, Wrench } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills: Skill[] = [
    // Programming
    { name: "Python", level: 85, category: "Programming" },
    { name: "SQL", level: 90, category: "Programming" },
    
    // Tools
    { name: "Excel", level: 95, category: "Tools" },
    { name: "Power BI", level: 75, category: "Tools" },
    { name: "Power Query", level: 80, category: "Tools" },
    
    // Libraries
    { name: "Pandas", level: 85, category: "Libraries" },
    { name: "NumPy", level: 80, category: "Libraries" },
    { name: "scikit-learn", level: 70, category: "Libraries" },
    
    // Concepts
    { name: "Data Cleaning", level: 90, category: "Concepts" },
    { name: "EDA", level: 85, category: "Concepts" },
    { name: "Visualization", level: 85, category: "Concepts" },
    { name: "Time Series", level: 75, category: "Concepts" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Programming":
        return <Code2 className="h-5 w-5" />;
      case "Tools":
        return <Wrench className="h-5 w-5" />;
      case "Libraries":
        return <Database className="h-5 w-5" />;
      case "Concepts":
        return <LineChart className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  return (
    <section id="skills" className="py-20 px-4" ref={sectionRef}>
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Tech Stack
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => (
            <div
              key={category}
              className="glass rounded-2xl p-6 card-hover reveal"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  {getCategoryIcon(category)}
                </div>
                <h3 className="text-xl font-semibold">{category}</h3>
              </div>

              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${(categoryIndex * 0.1) + (index * 0.05)}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
