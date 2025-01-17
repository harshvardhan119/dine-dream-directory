import { Card, CardContent } from "@/components/ui/card";

const CUISINES = [
  { name: "Italian", icon: "🍝" },
  { name: "Japanese", icon: "🍱" },
  { name: "Mexican", icon: "🌮" },
  { name: "Indian", icon: "🍛" },
  { name: "French", icon: "🥖" },
  { name: "Chinese", icon: "🥢" },
];

export const CuisineCategories = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Browse by Cuisine</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {CUISINES.map(({ name, icon }) => (
            <Card
              key={name}
              className="hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <span className="text-4xl mb-2">{icon}</span>
                <span className="font-medium">{name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};