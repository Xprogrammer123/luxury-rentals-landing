import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";

const cars = [
  {
    id: 1,
    name: "Porsche 911 GT3",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    price: 299,
  },
  {
    id: 2,
    name: "Range Rover Sport",
    image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&w=800&q=80",
    price: 199,
  },
  {
    id: 3,
    name: "Mercedes-Benz S-Class",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    price: 249,
  },
];

interface FilePreview {
  file: File;
  preview: string;
}

const RentalForm = () => {
  const { carId } = useParams();
  const { toast } = useToast();
  const car = cars.find((c) => c.id === Number(carId));

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  const [driverLicenseFront, setDriverLicenseFront] = useState<FilePreview | null>(
    null
  );
  const [driverLicenseBack, setDriverLicenseBack] = useState<FilePreview | null>(
    null
  );
  const [ssnImage, setSSNImage] = useState<FilePreview | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: (value: FilePreview | null) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter({
          file,
          preview: reader.result as string,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    // For now, we'll just show a success message
    toast({
      title: "Rental Request Submitted",
      description: "We'll contact you shortly to confirm your reservation.",
    });
  };

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="container mx-auto px-4 max-w-3xl"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold text-center mb-12"
        >
          Complete Your Rental Request
        </motion.h1>

        <Card>
          <CardContent className="p-6">
            <div className="mb-8">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4">
                <h2 className="text-2xl font-bold">{car.name}</h2>
                <p className="text-xl text-primary">${car.price}/day</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <Input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Current Address
                </label>
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Driver's License (Front)
                </label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setDriverLicenseFront)}
                  required
                />
                {driverLicenseFront && (
                  <img
                    src={driverLicenseFront.preview}
                    alt="Driver's License Front"
                    className="mt-2 h-32 object-cover rounded"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Driver's License (Back)
                </label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setDriverLicenseBack)}
                  required
                />
                {driverLicenseBack && (
                  <img
                    src={driverLicenseBack.preview}
                    alt="Driver's License Back"
                    className="mt-2 h-32 object-cover rounded"
                  />
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  SSN Image
                </label>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, setSSNImage)}
                  required
                />
                {ssnImage && (
                  <img
                    src={ssnImage.preview}
                    alt="SSN"
                    className="mt-2 h-32 object-cover rounded"
                  />
                )}
              </div>

              <Button type="submit" className="w-full">
                Submit Rental Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default RentalForm;
