
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const progressData = [
  { day: "Mon", score: 85 },
  { day: "Tue", score: 90 },
  { day: "Wed", score: 88 },
  { day: "Thu", score: 92 },
  { day: "Fri", score: 95 },
  { day: "Sat", score: 89 },
  { day: "Sun", score: 94 },
];

const achievements = [
  {
    title: "Quick Learner",
    description: "Completed 5 quizzes in one day",
    icon: Trophy,
    color: "bg-primary/50",
  },
  {
    title: "Perfect Score",
    description: "Got 100% in a quiz",
    icon: Star,
    color: "bg-secondary/50",
  },
  {
    title: "On a Roll",
    description: "Completed quizzes 3 days in a row",
    icon: TrendingUp,
    color: "bg-accent/50",
  },
];

const Progress = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/30 to-secondary/20 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <h1 className="text-3xl font-bold text-center mb-8">
            Your Learning Journey 🚀
          </h1>

          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Weekly Progress</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ChartContainer className="h-[300px]" config={{}}>
                <LineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip content={<ChartTooltipContent />} />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#8884d8"
                    strokeWidth={2}
                  />
                </LineChart>
              </ChartContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none">
                  <CardContent
                    className={`p-6 ${achievement.color} rounded-xl space-y-4`}
                  >
                    <div className="p-3 rounded-full bg-white/80 w-fit">
                      <achievement.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">{achievement.title}</h3>
                    <p className="text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Progress;
