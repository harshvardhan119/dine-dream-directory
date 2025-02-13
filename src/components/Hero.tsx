
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative min-h-[80vh] bg-[#0066FF] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/public/lovable-uploads/67d46b28-4c8c-4ad2-ac14-bc12d6101a72.png')] bg-repeat opacity-20" />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white space-y-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Boost Your Child's Future
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Unlocking Potential. Your Partner in Cultivating Your Child's Educational Journey
            </p>
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-6 text-xl rounded-full shadow-lg"
            >
              JOIN FOR FREE →
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/public/lovable-uploads/67d46b28-4c8c-4ad2-ac14-bc12d6101a72.png"
              alt="Educational Characters"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
