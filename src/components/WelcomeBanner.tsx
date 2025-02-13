
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const WelcomeBanner = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-primary/50 to-secondary/30">
      <div className="container mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Welcome to Learning Adventures! 🌟
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8">
            A safe and fun space to learn and grow together
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              Start Your Journey
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
