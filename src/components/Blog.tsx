import { BookOpen, FileCode, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

interface BlogPost {
  title: string;
  summary: string;
  icon: any;
  link: string;
}

const Blog = () => {
  const posts: BlogPost[] = [
    {
      title: "EDA Patterns That Reveal Hidden Insights",
      summary: "Five exploratory analysis techniques I use to quickly understand new datasets: distribution checks, correlation heatmaps, outlier detection, temporal patterns, and missing value strategies.",
      icon: BookOpen,
      link: "#",
    },
    {
      title: "Feature Engineering Tips for ML Models",
      summary: "Practical feature engineering approaches that improved my model performance: temporal features, aggregations, one-hot vs. label encoding, handling skewed data, and creating interaction terms.",
      icon: FileCode,
      link: "#",
    },
    {
      title: "Interpreting Model Metrics Beyond Accuracy",
      summary: "Why accuracy alone is misleading: understanding precision, recall, F1-score, ROC-AUC, and confusion matrices to choose the right metric for business impact and model evaluation.",
      icon: Target,
      link: "#",
    },
  ];

  return (
    <section id="blog" className="py-20 px-4 bg-gradient-to-b from-muted/20 to-transparent">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center reveal">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Blog & Notes
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 reveal">
          Sharing learnings and insights from my data analytics journey
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 card-hover reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-3 rounded-lg bg-secondary/10 text-secondary w-fit mb-4">
                <post.icon className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-semibold mb-3 hover:text-primary transition-colors">
                {post.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                {post.summary}
              </p>

              <Button
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary/80 px-0"
                asChild
              >
                <a href={post.link}>
                  Read more →
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
