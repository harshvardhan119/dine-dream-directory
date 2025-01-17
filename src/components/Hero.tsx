import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <div className="relative h-[60vh] min-h-[600px] w-full bg-gradient-to-r from-black to-gray-800">
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 text-center animate-fadeIn">
          Find your table for any occasion
        </h1>
        <div className="w-full max-w-3xl bg-white p-4 rounded-lg shadow-lg flex gap-4 animate-fadeIn">
          <Input
            placeholder="Location, Restaurant, or Cuisine"
            className="flex-grow text-lg"
          />
          <Button className="bg-primary hover:bg-primary/90">
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </div>
    </div>
  );
};