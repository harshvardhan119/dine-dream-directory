import { RestaurantCard } from "./RestaurantCard";

const FEATURED_RESTAURANTS = [
  {
    name: "La Maison Belle",
    cuisine: "French Fine Dining",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
    priceRange: "$$$",
  },
  {
    name: "Sakura Sushi",
    cuisine: "Contemporary Japanese",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    priceRange: "$$",
  },
  {
    name: "Tuscany Trattoria",
    cuisine: "Authentic Italian",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    priceRange: "$$$",
  },
];

export const FeaturedRestaurants = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Featured Restaurants</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of the finest dining establishments
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_RESTAURANTS.map((restaurant) => (
            <RestaurantCard key={restaurant.name} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};