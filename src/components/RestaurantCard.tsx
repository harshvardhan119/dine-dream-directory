import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

interface RestaurantCardProps {
  name: string;
  cuisine: string;
  rating: number;
  image: string;
  priceRange: string;
}

export const RestaurantCard = ({
  name,
  cuisine,
  rating,
  image,
  priceRange,
}: RestaurantCardProps) => {
  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold">
          {priceRange}
        </div>
      </div>
      <CardHeader className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">{name}</h3>
            <p className="text-gray-600">{cuisine}</p>
          </div>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded-lg">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 font-medium text-yellow-700">{rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90 text-white">
          Reserve a Table
        </Button>
      </CardContent>
    </Card>
  );
};