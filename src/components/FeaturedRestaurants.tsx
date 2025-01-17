import { RestaurantCard } from "./RestaurantCard";

const FEATURED_RESTAURANTS = [
  {
    name: "La Maison Belle",
    cuisine: "French",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    priceRange: "$$$",
  },
  {
    name: "Sakura Sushi",
    cuisine: "Japanese",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    priceRange: "$$",
  },
  {
    name: "Tuscany Trattoria",
    cuisine: "Italian",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    priceRange: "$$$",
  },
];

export const FeaturedRestaurants = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8">Featured Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_RESTAURANTS.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};