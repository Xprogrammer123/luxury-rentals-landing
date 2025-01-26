import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/framer-animations";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Upload } from "lucide-react";
import * as z from "zod";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";
import { BackButton } from "@/components/ui/BackButton";

const cars = [
  {
    id: "1",
    name: "Porsche 911 GT3",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    price: 299,
    category: "luxury",
  },
  {
    id: "2",
    name: "Range Rover Sport",
    image: "https://images.unsplash.com/photo-1519245659620-e859806a8d3b?auto=format&fit=crop&w=800&q=80",
    price: 199,
    category: "suv",
  },
  {
    id: "3",
    name: "Mercedes-Benz S-Class",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=800&q=80",
    price: 249,
    category: "luxury",
  },
];

const formSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
});

interface FilePreview {
  file: File;
  preview: string;
}

const RentalForm = () => {
  const { carId } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id === carId);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);

  const [driverLicenseFront, setDriverLicenseFront] = useState<FilePreview | null>(null);
  const [driverLicenseBack, setDriverLicenseBack] = useState<FilePreview | null>(null);
  const [ssnImage, setSSNImage] = useState<FilePreview | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  const [image, setImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Preview selected image
    }
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

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    if (!driverLicenseFront || !driverLicenseBack || !ssnImage) {
      return;
    }

    // Here you would typically send the data to your backend
    setShowSuccessDialog(true);

    // Navigate back to car selection after dialog is closed
    setTimeout(() => {
      navigate("/cars");
    }, 2000);
  };

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">Car not found. Please select a car from our collection.</p>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="container mx-auto px-4 max-w-3xl"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-12 text-luxury-black"
          >
            <div className="relative">
              <BackButton className="absolute top-4 left-4" />
            </div>

            Complete Your <span className="text-luxury-brightOrange">Rental Request</span>
          </motion.h1>

          <Card>
            <CardContent className="p-6">
              <div className="mb-8">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-64 object-cover rounded-lg border-2 border-luxury-orange"
                />
                <div className="mt-4">
                  <h2 className="text-2xl font-bold text-luxury-black">{car.name}</h2>
                  <p className="text-xl text-luxury-brightOrange font-semibold">${car.price}/day</p>
                </div>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input type="tel" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Address</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2 text-luxury-black">
                        Driver's License (Front)
                      </label>
                      <Input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleFileChange(e, setDriverLicenseFront)}
                        required
                        className="border-luxury-orange focus:ring-luxury-brightOrange"
                      />
                      {driverLicenseFront && (
                        <img
                          src={driverLicenseFront.preview}
                          alt="Driver's License Front"
                          className="mt-2 h-32 object-cover rounded border-2 border-luxury-orange"
                        />
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-luxury-black">
                        Driver's License (Back)
                      </label>
                      <label
                        htmlFor="driverLicenseBack"
                        className="border-2 border-dashed border-luxury-orange rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer hover:border-luxury-brightOrange"
                      >
                        {driverLicenseBack ? (
                          <img
                            src={driverLicenseBack.preview}
                            alt="Driver's License Back"
                            className="w-full h-32 object-cover rounded-md"
                          />
                        ) : (
                          <div className="flex flex-col items-center">
                            <Upload className="h-12 w-12 text-luxury-orange" />
                            <span className="text-luxury-orange mt-2">Click to upload</span>
                          </div>
                        )}
                      </label>
                      <Input
                        id="driverLicenseBack"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, setDriverLicenseBack)}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2 text-luxury-black">
                        SSN Image
                      </label>
                      <label
                        htmlFor="ssnImage"
                        className="border-2 border-dashed border-luxury-orange rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer hover:border-luxury-brightOrange"
                      >
                        {ssnImage ? (
                          <img
                            src={ssnImage.preview}
                            alt="SSN"
                            className="w-full h-32 object-cover rounded-md"
                          />
                        ) : (
                          <div className="flex flex-col items-center">
                            <Upload className="h-12 w-12 text-luxury-orange" />
                            <span className="text-luxury-orange mt-2">Click to upload</span>
                          </div>
                        )}
                      </label>
                      <Input
                        id="ssnImage"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileChange(e, setSSNImage)}
                        required
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-luxury-brightOrange hover:bg-luxury-orange transition-colors duration-300"
                  >
                    Submit Rental Request
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold text-luxury-black">
              Rental Request Submitted
            </AlertDialogTitle>
            <AlertDialogDescription className="text-lg text-luxury-black">
              Your rental request has been successfully submitted. We will get back to you soon.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogAction
              className="bg-luxury-brightOrange hover:bg-luxury-orange text-white"
              onClick={() => navigate("/")}
            >
              Go to Homepage
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default RentalForm;
