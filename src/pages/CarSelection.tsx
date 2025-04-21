import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BackButton } from "@/components/ui/BackButton";
import {
  fetchPublicCars,
  fetchPublicCategories,
} from "@/service/rentalService";
import { Loader, AlertCircle } from "lucide-react";

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Car {
  id: number;
  slug: string;  
  name: string;
  image: string;
  price: number;
  type: string;
  category: number;
}

const CarGrid = ({ vehicles }: { vehicles: Car[] }) => {
  const navigate = useNavigate();

  if (vehicles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64">
        <AlertCircle className="h-12 w-12 text-gray-400" />
        <p className="mt-2 text-center text-gray-500 text-xl">
          No cars available in this category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {vehicles.map((car, index) => (
        <motion.div
          key={car.id}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: index * 0.1 }}
        >
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{car.name}</h3>
              <p className="text-gray-600 mb-2">{car.type}</p>
              <p className="text-2xl font-bold text-primary">
                ${car.price}/day
              </p>
            </CardContent>
            <CardFooter className="p-6 pt-0">
              <Button
                className="w-full"
                onClick={() => navigate(`/rental-form/${car.slug}`)}
              >
                Rent Now
              </Button>
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const CarSelection = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [carData, categoryData] = await Promise.all([
          fetchPublicCars(),
          fetchPublicCategories(),
        ]);

        const mappedCars: Car[] = carData.map((car: any) => ({
          id: car.id,
          slug: car.slug,
          name: `${car.make} ${car.model} ${car.year}`,
          image:
            car.image || "https://via.placeholder.com/400x300?text=No+Image",
          price: parseFloat(car.price_per_day),
          type: car.color,
          category: car.category.id,
        }));

        setCars(mappedCars);
        setCategories(categoryData);
        if (categoryData.length > 0) {
          setSelectedCategory(categoryData[0].slug); // Default selected tab
        }
      } catch (err: any) {
        setError(err.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="container mx-auto px-4"
      >
        <div className="relative">
          <BackButton className="absolute top-0 left-4 md:-top-10" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Available Cars for Rent
        </motion.h1>

        {loading ? (
          <div className="flex flex-col items-center justify-center">
            <Loader className="animate-spin h-10 w-10 text-gray-500" />
            <p className="mt-4 text-center text-lg text-gray-500">
              Loading cars...
            </p>
          </div>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <Tabs
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value)}
            className="w-full"
          >
            <TabsList className="w-full justify-center mb-8 flex flex-wrap gap-4">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.slug}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.id} value={category.slug}>
                <CarGrid
                  vehicles={cars.filter((car) => car.category === category.id)}
                />
              </TabsContent>
            ))}
          </Tabs>
        )}
      </motion.div>
    </div>
  );
};

export default CarSelection;
