
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Newsletter } from "@/components/landing/Newsletter";
import { Footer } from "@/components/landing/Footer";
import { BackButton } from "@/components/ui/BackButton";
import { ProductsTable } from "@/components/admin/ProductsTable";
import { MessagesTable } from "@/components/admin/MessagesTable";
import { AddCarForm } from "@/components/admin/AddCarForm";
import { AdminSidebar } from "@/components/admin/AdminSidebar";

interface Car {
  id: number;
  name: string;
  image: string;
  price: number;
  type: string;
  category: "luxury" | "suv" | "trucks";
}

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
}

const Admin = () => {
  const [activeTab, setActiveTab] = useState<"products" | "messages">("products");
  const [cars, setCars] = useState<Car[]>([]);
  const [messages] = useState<Message[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      message: "I'm interested in renting a luxury car",
      date: "2024-02-20",
    },
  ]);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleAddCar = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newCar = {
      id: cars.length + 1,
      name: formData.get("name") as string,
      image: formData.get("image") as string,
      price: Number(formData.get("price")),
      type: formData.get("type") as string,
      category: formData.get("category") as "luxury" | "suv" | "trucks",
    };
    const updatedCars = [...cars, newCar];
    setCars(updatedCars);
    localStorage.setItem('cars', JSON.stringify(updatedCars));
    toast({
      title: "Success",
      description: "Car added successfully",
    });
  };

  const handleDeleteCar = (id: number) => {
    const updatedCars = cars.filter((car) => car.id !== id);
    setCars(updatedCars);
    localStorage.setItem('cars', JSON.stringify(updatedCars));
    toast({
      title: "Success",
      description: "Car deleted successfully",
    });
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    navigate("/login");
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of the admin dashboard",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative">
        <BackButton className="absolute top-4 left-4" />
      </div>

      <AdminSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onLogout={handleLogout}
      />

      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-luxury-black">
            Admin Dashboard
          </h1>
        </div>

        {activeTab === "products" && (
          <div>
            <div className="mb-6 flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Products</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" /> Add New Car
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Car</DialogTitle>
                  </DialogHeader>
                  <AddCarForm onSubmit={handleAddCar} />
                </DialogContent>
              </Dialog>
            </div>
            <ProductsTable cars={cars} onDeleteCar={handleDeleteCar} />
          </div>
        )}

        {activeTab === "messages" && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Messages</h2>
            <MessagesTable messages={messages} />
          </div>
        )}
      </main>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Admin;
