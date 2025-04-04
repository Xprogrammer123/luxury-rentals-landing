import { useState, useEffect } from "react";
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
import { BackButton } from "@/components/ui/BackButton";
import { ProductsTable } from "@/components/admin/ProductsTable";
import { MessagesTable } from "@/components/admin/MessagesTable";
import { AddCarForm } from "@/components/admin/AddCarForm";
import { EditCarForm } from "@/components/admin/EditCarForm";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import {
  fetchCars,
  addNewCar,
  fetchCategories,
  editCar,
  deleteCar,
} from "@/service/userService";

interface Car {
  id: number;
  make: string;
  model: string;
  year: number;
  color: string;
  price_per_day: string;
  available: boolean;
  category: {
    id: number;
    name: string;
    slug: string;
  };
  image: string;
  slug: string;
  user: number;
}

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

const Admin = () => {
  const [activeTab, setActiveTab] = useState<"products" | "messages">(
    "products"
  );
  const [cars, setCars] = useState<Car[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [messages] = useState<Message[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      message: "I'm interested in renting a luxury car",
      date: "2024-02-20",
    },
  ]);
  const [editingCar, setEditingCar] = useState<Car | null>(null);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const token = localStorage.getItem("token");

  // Fetch cars and categories on mount
  useEffect(() => {
    if (token) {
      fetchCars(token)
        .then((data) => setCars(data))
        .catch((err) =>
          toast({
            title: "Error fetching cars",
            description: err,
          })
        );
      fetchCategories(token)
        .then((data) => setCategories(data))
        .catch((err) =>
          toast({
            title: "Error fetching categories",
            description: err,
          })
        );
    }
  }, [token, toast]);

  const handleAddCar = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newCarData = {
      make: formData.get("make") as string,
      model: formData.get("model") as string,
      year: Number(formData.get("year")),
      color: formData.get("color") as string,
      price_per_day: formData.get("price_per_day") as string,
      available: true,
      category_id: Number(formData.get("category_id")),
    };

    try {
      if (!token) throw new Error("Not authenticated");
      const addedCar = await addNewCar(newCarData, token);
      setCars((prev) => [...prev, addedCar]);
      toast({
        title: "Success",
        description: "Car added successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
      });
    }
  };

  const handleDeleteCar = async (slug: string) => {
    try {
      if (!token) throw new Error("Not authenticated");
      await deleteCar(slug, token);
      setCars((prev) => prev.filter((car) => car.slug !== slug));
      toast({
        title: "Success",
        description: "Car deleted successfully",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
      });
    }
  };

  const handleUpdateCar = async (updatedData: {
    make: string;
    model: string;
    year: number;
    color: string;
    price_per_day: string;
    category_id: number;
  }) => {
    try {
      if (!token || !editingCar) throw new Error("Not authenticated");
      const updatedCar = await editCar(editingCar.slug, updatedData, token);
      setCars((prev) =>
        prev.map((car) => (car.slug === editingCar.slug ? updatedCar : car))
      );
      toast({
        title: "Success",
        description: "Car updated successfully",
      });
      setEditingCar(null);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminLoggedIn");
    localStorage.removeItem("token");
    localStorage.removeItem("authToken");
    localStorage.removeItem("refreshToken");
    navigate("/login");
    toast({
      title: "Logged out successfully",
      description: "You have been logged out of the admin dashboard",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex h-screen overflow-hidden">
        <AdminSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onLogout={handleLogout}
        />
        <main className="w-full">
          <div className="p-8">
            <div className="mb-8 flex items-center justify-between">
              <div>
                <BackButton className="mb-4" />
                <h1 className="text-3xl font-bold text-luxury-black">
                  Admin Dashboard
                </h1>
              </div>
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
                      <AddCarForm
                        onSubmit={handleAddCar}
                        categories={categories}
                      />
                    </DialogContent>
                  </Dialog>
                </div>
                <ProductsTable
                  cars={cars}
                  onDeleteCar={handleDeleteCar}
                  onEditCar={(car) => setEditingCar(car)}
                />
              </div>
            )}
            {activeTab === "messages" && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Messages</h2>
                <MessagesTable messages={messages} />
              </div>
            )}
          </div>
        </main>
      </div>

      {/* Edit Car Dialog */}
      {editingCar && (
        <Dialog open onOpenChange={() => setEditingCar(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Car</DialogTitle>
            </DialogHeader>
            <EditCarForm
              initialValues={{
                make: editingCar.make,
                model: editingCar.model,
                year: editingCar.year,
                color: editingCar.color,
                price_per_day: editingCar.price_per_day,
                category_id: editingCar.category.id,
              }}
              categories={categories}
              onSubmit={handleUpdateCar}
            />
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Admin;
