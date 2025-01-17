import { Hero } from "@/components/Hero";
import { FeaturedRestaurants } from "@/components/FeaturedRestaurants";
import { CuisineCategories } from "@/components/CuisineCategories";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedRestaurants />
      <CuisineCategories />
    </div>
  );
};

export default Index;