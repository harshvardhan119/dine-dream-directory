
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Timer, Volume } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const questions = [
  {
    id: 1,
    question: "What color is the sky on a clear day?",
    options: ["Blue", "Green", "Red", "Yellow"],
    correctAnswer: "Blue",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    question: "Which animal says 'meow'?",
    options: ["Dog", "Cat", "Bird", "Fish"],
    correctAnswer: "Cat",
    image: "/placeholder.svg",
  },
  // Add more questions as needed
];

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === questions[currentQuestion].correctAnswer;
    
    if (isCorrect) {
      toast.success("Great job! 🌟");
      setScore(score + 1);
    } else {
      toast.info("Try again! You can do it! 💪");
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setProgress(((currentQuestion + 1) / questions.length) * 100);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setProgress(0);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/30 to-secondary/20 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        {!showResult ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-8 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-6 h-6 text-primary-foreground" />
                  <span className="text-lg font-medium">
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Timer className="w-6 h-6 text-primary-foreground" />
                  <Volume className="w-6 h-6 text-primary-foreground cursor-pointer hover:text-primary-foreground/80" />
                </div>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <Card className="border-none shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div className="aspect-video bg-muted rounded-lg mb-6">
                  <img
                    src={questions[currentQuestion].image}
                    alt="Question visual aid"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h2 className="text-2xl font-semibold text-center mb-8">
                  {questions[currentQuestion].question}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {questions[currentQuestion].options.map((option) => (
                    <Button
                      key={option}
                      onClick={() => handleAnswer(option)}
                      className="p-6 text-lg h-auto bg-white hover:bg-secondary/50 text-primary-foreground border-2 border-secondary/50"
                      variant="outline"
                    >
                      {option}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center space-y-6"
          >
            <h2 className="text-3xl font-bold mb-4">Quiz Complete! 🎉</h2>
            <p className="text-xl mb-8">
              You scored {score} out of {questions.length}!
            </p>
            <Button onClick={resetQuiz} size="lg">
              Try Again
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
