import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Footer } from "@/components/landing/Footer";
import { Newsletter } from "@/components/landing/Newsletter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Upload, Loader, AlertCircle } from "lucide-react";
import * as z from "zod";
import Confetti from "react-confetti";
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
import { useQuery } from "@tanstack/react-query";
import {
  getPublicCar,
  sendRentalRequest,
  uploadSSNImage,
  uploadDriversLicenseFront,
  uploadDriversLicenseBack,
} from "@/service/rentalService";


const formSchema = z.object({
  additionalInfo: z.string().optional(),
  currentAddress: z.string().min(5, "Address must be at least 5 characters"),
  email: z.string().email("Invalid email address"),
  endDate: z.string().min(1, "End date is required"),
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phoneNumber: z.string().min(10, "Phone number must be at least 10 digits"),
  startDate: z.string().min(1, "Start date is required"),
});
type FormValues = z.infer<typeof formSchema>;


interface CarDetail {
  id: number;
  make: string;
  model: string;
  year: string;
  image: string | null;
  price_per_day: string;
  color: string;
  category: { id: number; name: string; slug: string };
}


interface FilePreview {
  file: File;
  preview: string;
}

const RentalForm = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  
  const {
    data: carData,
    isLoading: carLoading,
    error: carError,
  } = useQuery<CarDetail, Error>({
    queryKey: ["publicCar", slug],
    queryFn: () => getPublicCar(slug!),
    enabled: !!slug,
  });

  
  const [dlFront, setDlFront] = useState<FilePreview | null>(null);
  const [dlBack, setDlBack] = useState<FilePreview | null>(null);
  const [ssn, setSsn] = useState<FilePreview | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      currentAddress: "",
      startDate: "",
      endDate: "",
      additionalInfo: "",
    },
  });

  
  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setter: React.Dispatch<React.SetStateAction<FilePreview | null>>
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => setter({ file, preview: reader.result as string });
    reader.readAsDataURL(file);
  };

  
  const onSubmit = form.handleSubmit(async (values) => {
    if (!dlFront || !dlBack || !ssn) {
      alert("Please upload all required documents.");
      return;
    }
    setSubmitting(true);

    try {
      
      const payload = {
        additional_info: values.additionalInfo,
        car: carData!.id,
        current_address: values.currentAddress,
        email: values.email,
        end_date: values.endDate,
        full_name: values.fullName,
        phone_number: values.phoneNumber,
        start_date: values.startDate,
      };

      
      const rental = await sendRentalRequest(payload);
      const reqSlug = (rental as any).slug || (rental as any).id;

      
      await Promise.all([
        uploadDriversLicenseFront(reqSlug, dlFront.file),
        uploadDriversLicenseBack(reqSlug, dlBack.file),
        uploadSSNImage(reqSlug, ssn.file),
      ]);

      setShowSuccessModal(true);
    } catch (err: any) {
      console.error(err);
      alert(err.message || "Submission failed.");
    } finally {
      setSubmitting(false);
    }
  });

  
  if (carLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="animate-spin h-10 w-10 text-gray-500" />
      </div>
    );
  }
  if (carError || !carData) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <AlertCircle className="h-12 w-12 text-red-500" />
        <p className="mt-4 text-red-600">
          {carError?.message || "Car not found."}
        </p>
      </div>
    );
  }

  
  const car = {
    name: `${carData.make} ${carData.model} ${carData.year}`,
    image: carData.image || "https://via.placeholder.com/400x300?text=No+Image",
    price: parseFloat(carData.price_per_day),
    type: carData.color,
  };

  
  return (
    <div className="min-h-screen bg-gray-50 mt-10 pb-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="container mx-auto px-4 max-w-3xl"
      >
        <div className="relative mb-8">
          <BackButton className="absolute top-0 left-0" />
        </div>
        <h1 className="text-4xl font-bold text-center mb-12 text-luxury-black">
          Complete Your{" "}
          <span className="text-luxury-brightOrange">Rental Request</span>
        </h1>

        <Card>
          <CardContent className="p-6 space-y-6">
            {/* Car Preview */}
            <div>
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-64 object-cover rounded-lg border-2 border-luxury-orange"
              />
              <div className="mt-4">
                <h2 className="text-2xl font-bold">{car.name}</h2>
                <p className="text-xl text-luxury-brightOrange font-semibold">
                  ${car.price}/day
                </p>
                <p className="text-gray-600">{car.type}</p>
              </div>
            </div>

            {/* Info Form */}
            <form onSubmit={onSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <Label>Full Name</Label>
                <Input {...form.register("fullName")} />
                {form.formState.errors.fullName && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.fullName.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <Label>Email</Label>
                <Input type="email" {...form.register("email")} />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <Label>Phone Number</Label>
                <Input {...form.register("phoneNumber")} />
                {form.formState.errors.phoneNumber && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.phoneNumber.message}
                  </p>
                )}
              </div>

              {/* Address */}
              <div>
                <Label>Current Address</Label>
                <Input {...form.register("currentAddress")} />
                {form.formState.errors.currentAddress && (
                  <p className="text-red-500 text-sm">
                    {form.formState.errors.currentAddress.message}
                  </p>
                )}
              </div>

              {/* Start / End Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Start Date</Label>
                  <Input type="date" {...form.register("startDate")} />
                  {form.formState.errors.startDate && (
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.startDate.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label>End Date</Label>
                  <Input type="date" {...form.register("endDate")} />
                  {form.formState.errors.endDate && (
                    <p className="text-red-500 text-sm">
                      {form.formState.errors.endDate.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Additional Info */}
              <div>
                <Label>Additional Info</Label>
                <textarea
                  {...form.register("additionalInfo")}
                  className="w-full mt-1 p-2 border rounded-md"
                  rows={3}
                />
              </div>

              {/* File Uploads */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div>
                  <Label>DL Front</Label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, setDlFront)}
                    className="mt-1 block w-full"
                  />
                </div>
                <div>
                  <Label>DL Back</Label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, setDlBack)}
                    className="mt-1 block w-full"
                  />
                </div>
                <div>
                  <Label>SSN Image</Label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, setSsn)}
                    className="mt-1 block w-full"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full py-3 bg-luxury-brightOrange text-white rounded-lg hover:bg-luxury-orange transition disabled:opacity-50 flex justify-center items-center gap-2"
                disabled={submitting}
              >
                {submitting ? (
                  <Loader className="animate-spin h-5 w-5" />
                ) : (
                  <Upload />
                )}
                {submitting ? "Submitting..." : "Submit Rental Request"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </motion.div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            recycle={false}
          />
          <div className="bg-white p-8 rounded-lg text-center max-w-sm">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-6xl text-luxury-brightOrange mb-4"
            >
              ✔
            </motion.div>
            <h2 className="text-2xl font-bold mb-4">Success!</h2>
            <p className="mb-6">Your rental request has been submitted.</p>
            <Button
              onClick={() => navigate("/cars")}
              className="bg-luxury-brightOrange"
            >
              Rent Another Car
            </Button>
          </div>
        </div>
      )}

      <div className="mt-20">
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default RentalForm;
