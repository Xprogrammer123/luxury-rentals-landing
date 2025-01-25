import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";

const cars = {
  luxury: [
    {
      id: 1,
      name: "Porsche 911 GT3",
      image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      price: 299,
      type: "Sports Car",
    },
    {
      id: 2,
      name: "Mercedes-Benz S-Class",
      image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
      price: 249,
      type: "Luxury Sedan",
    },
  ],
  suv: [
    {
      id: 3,
      name: "Range Rover Sport",
      image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&w=800&q=80",
      price: 199,
      type: "SUV",
    },
    {
      id: 4,
      name: "Jeep Grand Cherokee",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      price: 179,
      type: "SUV",
    },
  ],
  trucks: [
    {
      id: 5,
      name: "Ford F-150 Raptor",
      image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
      price: 159,
      type: "Truck",
    },
  ],
};

const CarGrid = ({ vehicles }: { vehicles: typeof cars.luxury }) => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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