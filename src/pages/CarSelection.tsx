import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";

const cars = [
  {
    id: 1,
    name: "Porsche 911 GT3",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    price: 299,
    type: "Sports Car",
  },
  {
    id: 2,
    name: "Range Rover Sport",
    image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&w=800&q=80",
    price: 199,
    type: "SUV",
  },
  {
    id: 3,
    name: "Mercedes-Benz S-Class",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    price: 249,
    type: "Luxury Sedan",
  },
  // Add more cars as needed
];

const CarSelection = () => {
  const navigate = useNavigate();

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
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
      </motion.div>
    </div>
  );
};

export default CarSelection;