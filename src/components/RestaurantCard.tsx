import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface RestaurantCardProps {
  id: string;
  name: string;
  location: string;
  capacity: number;
}

export const RestaurantCard = ({
  id,
  name,
  location,
  capacity,
}: RestaurantCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src="/restauraunt.jpg" // Static image as per your request
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <CardHeader className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">{name}</h3>
            <p className="text-gray-600">{location}</p>
            <p className="text-gray-600">Capacity: {capacity}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-6 pt-0">
        <Button
          className="w-full bg-primary hover:bg-primary/90 text-white"
          onClick={() => navigate(`/booking/${id}`)} 
        >
          Reserve a Table
        </Button>
      </CardContent>
    </Card>
  );
};
