import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";
import { useEffect, useState } from "react";
import { BackButton } from "@/components/ui/BackButton"

interface Car {
  id: number;
  name: string;
  image: string;
  price: number;
  type: string;
  category: "luxury" | "suv" | "trucks";
}

const CarGrid = ({ vehicles }: { vehicles: Car[] }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="relative">
  <BackButton className="absolute top-4 left-4" />
</div>

      {vehicles.map((car) => (
        <motion.div key={car.id} variants={fadeInUp}>
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover"
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
                onClick={() => navigate(`/rental-form/${car.id}`)}
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
  const [cars, setCars] = useState<{ luxury: Car[], suv: Car[], trucks: Car[] }>({
    luxury: [],
    suv: [],
    trucks: []
  });

  useEffect(() => {
    const storedCars = localStorage.getItem('cars');
    if (storedCars) {
      const parsedCars = JSON.parse(storedCars);
      // Group cars by category
      const groupedCars = {
        luxury: parsedCars.filter((car: Car) => car.category === 'luxury'),
        suv: parsedCars.filter((car: Car) => car.category === 'suv'),
        trucks: parsedCars.filter((car: Car) => car.category === 'trucks')
      };
      setCars(groupedCars);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="container mx-auto px-4"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-12"
        >
          Available Luxury Cars
        </motion.h1>
        <Tabs defaultValue="luxury" className="w-full">
          <TabsList className="w-full justify-center mb-8">
            <TabsTrigger value="luxury" className="px-8">Luxury Cars</TabsTrigger>
            <TabsTrigger value="suv" className="px-8">SUVs</TabsTrigger>
            <TabsTrigger value="trucks" className="px-8">Trucks</TabsTrigger>
          </TabsList>
          <TabsContent value="luxury">
            <CarGrid vehicles={cars.luxury} />
          </TabsContent>
          <TabsContent value="suv">
            <CarGrid vehicles={cars.suv} />
          </TabsContent>
          <TabsContent value="trucks">
            <CarGrid vehicles={cars.trucks} />
          </TabsContent>
        </Tabs>
      </motion.div>
    </div>
  );
};

export default CarSelection;
