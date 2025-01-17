import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Hero = () => {
  return (
    <div className="relative h-[70vh] min-h-[600px] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      <div className="relative h-full flex flex-col items-center justify-center px-4 space-y-8">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-center max-w-4xl leading-tight animate-fadeIn">
          Discover and Book the Perfect Table
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 text-center max-w-2xl animate-fadeIn">
          Experience exceptional dining at the finest restaurants in your city
        </p>
        <div className="w-full max-w-3xl bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-2xl flex flex-col md:flex-row gap-4 animate-fadeIn">
          <Input
            placeholder="Location, Restaurant, or Cuisine"
            className="flex-grow text-lg bg-white"
          />
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
            <Search className="mr-2 h-5 w-5" /> Find a Table
          </Button>
        </div>
      </div>
    </div>
  );
};