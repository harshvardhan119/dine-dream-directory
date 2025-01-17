import { Card, CardContent } from "@/components/ui/card";

const CUISINES = [
  { name: "Italian", icon: "🍝", description: "Pasta & Pizza" },
  { name: "Japanese", icon: "🍱", description: "Sushi & Ramen" },
  { name: "Mexican", icon: "🌮", description: "Tacos & More" },
  { name: "Indian", icon: "🍛", description: "Curry & Tandoor" },
  { name: "French", icon: "🥖", description: "Fine Dining" },
  { name: "Chinese", icon: "🥢", description: "Dim Sum & Wok" },
];

export const CuisineCategories = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Explore Cuisines</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover restaurants by your favorite cuisine type
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {CUISINES.map(({ name, icon, description }) => (
            <Card
              key={name}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <span className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {icon}
                </span>
                <span className="font-semibold text-gray-900 mb-1">{name}</span>
                <span className="text-sm text-gray-600">{description}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};