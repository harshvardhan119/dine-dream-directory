
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Trophy, Settings } from "lucide-react";

const features = [
  {
    title: "Fun Quizzes",
    description: "Learn at your own pace with interactive games",
    icon: BookOpen,
    color: "bg-primary/50",
  },
  {
    title: "Track Progress",
    description: "Watch your achievements grow day by day",
    icon: Trophy,
    color: "bg-secondary/50",
  },
  {
    title: "Customize",
    description: "Make your learning experience perfect for you",
    icon: Settings,
    color: "bg-accent/50",
  },
];

export const FeatureCards = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-none"
            >
              <CardContent
                className={`p-6 ${feature.color} rounded-xl space-y-4 h-full flex flex-col items-center text-center`}
              >
                <div className="p-3 rounded-full bg-white/80 backdrop-blur-sm shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
