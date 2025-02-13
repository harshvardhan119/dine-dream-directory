
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, GraduationCap, Star } from "lucide-react";

const features = [
  {
    title: "Chemistry",
    icon: BookOpen,
    description: "Interactive lessons and experiments",
    color: "bg-blue-100",
  },
  {
    title: "Mathematics",
    icon: Star,
    description: "Problem-solving and critical thinking",
    color: "bg-green-100",
  },
  {
    title: "Programming",
    icon: GraduationCap,
    description: "Learn coding through fun projects",
    color: "bg-purple-100",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0066FF]">
      {/* Navigation */}
      <nav className="bg-transparent py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">Study.Pilot</span>
          </div>
          <div className="flex items-center space-x-6">
            <Button variant="ghost" className="text-white">
              Programs
            </Button>
            <Button variant="ghost" className="text-white">
              Pricing
            </Button>
            <Button className="bg-amber-500 hover:bg-amber-600 text-white">
              SIGN IN
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-[80vh] overflow-hidden">
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

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className={`${feature.color} border-none shadow-lg h-full`}>
                  <CardContent className="p-6 text-center">
                    <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
