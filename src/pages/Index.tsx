
import { WelcomeBanner } from "@/components/WelcomeBanner";
import { FeatureCards } from "@/components/FeatureCards";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <WelcomeBanner />
      <FeatureCards />
    </div>
  );
};

export default Index;
