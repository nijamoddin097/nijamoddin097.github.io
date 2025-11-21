import { ExternalLink, Github, TrendingUp, Users, ShoppingCart, Clock, PieChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string;
  metrics?: { label: string; value: string }[];
  icon: any;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "Sales Insights Dashboard",
      description: "Interactive sales dashboard to reveal revenue trends, product performance, and regional KPIs for data-driven decisions.",
      tech: ["SQL", "Python", "Pandas", "Power BI"],
      github: "https://github.com/USERNAME/project1",
      live: "https://example.com/project1",
      metrics: [
        { label: "Data Points", value: "10K+" },
        { label: "KPIs Tracked", value: "15" },
      ],
      icon: TrendingUp,
    },
    {
      title: "Customer Churn Model",
      description: "Classification model predicting customer churn to prioritize retention actions and reduce attrition.",
      tech: ["Python", "scikit-learn", "Pandas", "SQL"],
      github: "https://github.com/USERNAME/project2",
      live: "https://example.com/project2",
      metrics: [
        { label: "Accuracy", value: "87%" },
        { label: "F1 Score", value: "0.84" },
      ],
      icon: Users,
    },
    {
      title: "Retail EDA & Insights Notebook",
      description: "Comprehensive exploratory analysis on retail transaction data uncovering seasonality and basket-level KPIs.",
      tech: ["Jupyter", "Python", "Pandas", "Plotly", "SQL"],
      github: "https://github.com/USERNAME/project3",
      live: "https://example.com/project3",
      metrics: [
        { label: "Transactions", value: "50K+" },
        { label: "Insights", value: "20+" },
      ],
      icon: ShoppingCart,
    },
    {
      title: "Time Series Forecasting",
      description: "Short-term forecasting notebook improving inventory planning using time series techniques.",
      tech: ["Python", "Prophet", "Pandas", "SQL"],
      github: "https://github.com/USERNAME/project4",
      live: "https://example.com/project4",
      metrics: [
        { label: "MAPE", value: "8.5%" },
        { label: "Forecast Days", value: "30" },
      ],
      icon: Clock,
    },
    {
      title: "Stakeholder Dashboard Prototype",
      description: "Prototype dashboard built to present executive KPIs with drilldowns and exportable reports.",
      tech: ["Power BI", "Excel", "SQL"],
      github: "https://github.com/USERNAME/project5",
      live: "https://example.com/project5",
      metrics: [
        { label: "Visualizations", value: "12" },
        { label: "Export Formats", value: "3" },
      ],
      icon: PieChart,
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Selected Projects
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 reveal">
          Showcasing practical applications of data analysis and machine learning
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden group card-hover reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                {/* Icon */}
                <div className="mb-4 p-3 rounded-lg bg-primary/10 text-primary w-fit">
                  <project.icon className="h-6 w-6" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-2 gap-3 mb-4 p-3 rounded-lg bg-muted/50">
                    {project.metrics.map((metric, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-primary">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 glass hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-1" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Case Study */}
        <div className="glass rounded-2xl p-8 md:p-12 reveal">
          <div className="flex items-center gap-2 mb-4">
            <Badge className="bg-primary text-primary-foreground">Featured</Badge>
            <h3 className="text-2xl md:text-3xl font-bold">Customer Churn Analysis</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Challenge</h4>
                <p className="text-muted-foreground">
                  A subscription service was experiencing 15% quarterly churn with no clear understanding of which customers were at risk, leading to reactive retention efforts.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-secondary mb-2">Approach</h4>
                <p className="text-muted-foreground">
                  Built an end-to-end ML pipeline: SQL for feature engineering (usage patterns, payment history), Python for model training (Random Forest, XGBoost), and Power BI for stakeholder visualization. Optimized for F1 score to balance precision and recall.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-primary mb-2">Impact</h4>
                <p className="text-muted-foreground">
                  Achieved 87% accuracy with 84% F1 score, identifying top 20% at-risk customers with 90% precision. Enabled proactive retention campaigns, reducing churn by 4% in the first quarter.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-4">
              <div className="glass rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">87%</div>
                <div className="text-sm text-muted-foreground">Model Accuracy</div>
              </div>
              <div className="glass rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-secondary mb-2">4%</div>
                <div className="text-sm text-muted-foreground">Churn Reduction</div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                <ExternalLink className="mr-2 h-4 w-4" />
                Download Notebook
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
