
import { motion } from "framer-motion";
import { CarCard } from "@/components/ui/CarCard";

const featuredCars = [
  {
    name: "Porsche 911 GT3",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    price: 299,
    type: "Sports Car",
  },
  {
    name: "Range Rover Sport",
    image:
      "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&w=800&q=80",
    price: 199,
    type: "SUV",
  },
  {
    name: "Mercedes-Benz S-Class",
    image:
      "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    price: 249,
    type: "Luxury Sedan",
  },
];

export const FeaturedCars = () => {
  return (
    <section className="py-20 bg-gray-50">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.2 }}
        className="container mx-auto px-4"
      >
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-luxury-black mb-4">
            Featured Cars
          </h2>
          <p className="text-gray-600">
            Choose from our selection of premium vehicles
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCars.map((car, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
            >
              <CarCard {...car} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};
