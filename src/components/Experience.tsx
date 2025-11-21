import { useState } from "react";
import { ChevronDown, Sparkles, BarChart3, LineChart, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Service {
  title: string;
  description: string;
  details: string;
  icon: any;
}

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      title: "Data Cleaning & Wrangling",
      description: "Transform raw, messy data into structured, analysis-ready formats with precision and efficiency.",
      details: "Using Python (Pandas), SQL, and Excel to handle missing values, duplicates, outliers, and data type conversions. Ensuring data quality and consistency for downstream analysis.",
      icon: Sparkles,
    },
    {
      title: "Exploratory Data Analysis",
      description: "Uncover hidden patterns, trends, and relationships through systematic data exploration.",
      details: "Statistical summaries, correlation analysis, distribution checks, and visualizations to understand data characteristics and generate actionable hypotheses.",
      icon: BarChart3,
    },
    {
      title: "Dashboarding & Visualization",
      description: "Create interactive, intuitive dashboards that communicate complex insights to stakeholders.",
      details: "Building executive-level dashboards with Power BI, Excel, and Python (Plotly/Matplotlib) featuring KPIs, trends, and drill-down capabilities for data-driven decisions.",
      icon: LineChart,
    },
    {
      title: "Predictive Modeling (ML)",
      description: "Develop machine learning models to forecast outcomes and support strategic planning.",
      details: "Classification and regression models using scikit-learn, including customer churn prediction, demand forecasting, and time series analysis with proper validation and metrics.",
      icon: Brain,
    },
  ];

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 px-4 bg-gradient-to-b from-transparent to-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            What I Do
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 card-hover reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                  <service.icon className="h-6 w-6" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {service.description}
                  </p>
                  
                  {expandedIndex === index && (
                    <p className="text-sm text-foreground/80 mb-3 animate-slide-in-right">
                      {service.details}
                    </p>
                  )}
                  
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleExpand(index)}
                    className="text-primary hover:text-primary/80 px-0"
                  >
                    {expandedIndex === index ? "Show less" : "Learn more"}
                    <ChevronDown
                      className={`ml-1 h-4 w-4 transition-transform ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
