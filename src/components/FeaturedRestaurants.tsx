import { useEffect, useState } from "react";
import axios from "axios";
import { RestaurantCard } from "./RestaurantCard";

export const FeaturedRestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await axios.get(`https://bookbackend-delta.vercel.app/restaurants`);
        setRestaurants(response.data);
        setLoading(false);
      } catch (err) {
        setError("Error fetching restaurants");
        setLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  if (loading) return <div>Loading...</div>; // You can replace this with a spinner or a skeleton loader
  if (error) return <div>{error}</div>;

  if (restaurants.length === 0) {
    return <div>No featured restaurants available at the moment.</div>;
  }

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
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      </div>
    </section>
  );
};
