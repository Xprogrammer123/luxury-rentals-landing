import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Footer } from "@/components/landing/Footer";
import { Newsletter } from "@/components/landing/Newsletter";
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
import Confetti from "react-confetti";

interface Car {
  id: number;
  name: string;
  image: string;
  price: number;
  type: string;
  category: "luxury" | "suv" | "trucks";
}

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
  const [car, setCar] = useState<Car | null>(null);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [driverLicenseFront, setDriverLicenseFront] = useState<FilePreview | null>(null);
  const [driverLicenseBack, setDriverLicenseBack] = useState<FilePreview | null>(null);
  const [ssnImage, setSSNImage] = useState<FilePreview | null>(null);

  useEffect(() => {
    const storedCars = localStorage.getItem("cars");
    if (storedCars && carId) {
      const parsedCars = JSON.parse(storedCars);
      const selectedCar = parsedCars.find((c: Car) => c.id === Number(carId));
      if (selectedCar) {
        setCar(selectedCar);
      }
    }
  }, [carId]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },
  });

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

    setShowSuccessDialog(true);
  };

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl">
          Car not found. Please select a car from our collection.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 mt-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="container mx-auto px-4 max-w-3xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-4xl font-bold text-center mb-12 text-luxury-black"
        >
          <div className="relative">
            <BackButton className="absolute top-4 left-4" />
          </div>
          Complete Your{" "}
          <span className="text-luxury-brightOrange">Rental Request</span>
        </motion.h1>

        <Card>
          <CardContent className="p-6">
            <div className="mb-8">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-64 object-cover rounded-lg border-2 border-luxury-orange"
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />
              <div className="mt-4">
                <h2 className="text-2xl font-bold text-luxury-black">
                  {car.name}
                </h2>
                <p className="text-xl text-luxury-brightOrange font-semibold">
                  ${car.price}/day
                </p>
                <p className="text-gray-600">{car.category}</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center ">
              <p className="mb-4 text-lg text-center font- font-bold">
               Simply fill out the form with your details, and we'll get you on the road in no time . Provide the necessary information, and we'll handlethe rest to ensure a smooth rental experience.
              </p>
              <button
                onClick={() => setShowSuccessDialog(true)}
                className="px-6 py-2 text-white bg-luxury-brightOrange rounded-lg hover:bg-luxury-orange transition flex items-center gap-2"
              >
                <Upload /> Fill Out Rental Form
              </button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <AlertDialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl font-bold text-luxury-black">
              Rental Request Processing.....
            </AlertDialogTitle>
            <AlertDialogDescription className="text-lg text-luxury-black">
             Click on the <span className="text-luxury-brightOrange">"Fill out Rental Form "</span> to fill necesarry information then click the <span className="text-luxury-brightOrange">"Form submitted "</span> when your from has been filled and we will get back to you as soon as possible 
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogAction
              className="bg-luxury-brightOrange hover:bg-luxury-orange text-white"
              onClick={() => window.location.href = "https://form.jotform.com/Tpadride/Tpadride-Logistics-Transport"}
            >
              Fill out Rental Form
            </AlertDialogAction>

            <AlertDialogAction
              className="bg-luxury-brightOrange border border hover:bg-luxury-orange text-white"
              onClick={() => {
                setShowSuccessDialog(false);
                setShowSuccessModal(true);
              }}
            >
              Form Submitted
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
          />
          <div className="bg-white p-8 rounded-lg text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl text-luxury-brightOrange mb-4"
            >
              ✔
            </motion.div>
            <h2 className="text-2xl font-bold mb-4">Success!</h2>
            <p className="mb-4">Your rental request has been submitted successfully.</p>
            <button
              className="px-6 py-2 text-white bg-luxury-brightOrange rounded-lg hover:bg-luxury-orange transition"
              onClick={() => navigate("/")}
            >
              Rent a Car
            </button>
          </div>
        </div>
      )}

      <div className="mt-28">
        <Newsletter/>
        <Footer/>
      </div>
    </div>
  );
};

export default RentalForm;