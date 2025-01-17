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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-sm font-semibold">
          {priceRange}
        </div>
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-gray-600">{cuisine}</p>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <Button className="w-full bg-primary hover:bg-primary/90">
          Book a Table
        </Button>
      </CardContent>
    </Card>
  );
};