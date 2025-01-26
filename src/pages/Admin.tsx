import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, MessageSquare, LogOut, Car } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

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
    setCars([...cars, newCar]);
  };

  const handleDeleteCar = (id: number) => {
    setCars(cars.filter((car) => car.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarProvider>
        <div className="flex min-h-screen w-full">
          <Sidebar>
            <SidebarContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setActiveTab("products")}
                    isActive={activeTab === "products"}
                  >
                    <Car />
                    <span>Products</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => setActiveTab("messages")}
                    isActive={activeTab === "messages"}
                  >
                    <MessageSquare />
                    <span>Messages</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton>
                    <LogOut />
                    <span>Logout</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarContent>
          </Sidebar>

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
                      <form onSubmit={handleAddCar} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Car Name</Label>
                          <Input id="name" name="name" required />
                        </div>
                        <div>
                          <Label htmlFor="image">Image URL</Label>
                          <Input id="image" name="image" required />
                        </div>
                        <div>
                          <Label htmlFor="price">Price per Day</Label>
                          <Input
                            id="price"
                            name="price"
                            type="number"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="type">Type</Label>
                          <Input id="type" name="type" required />
                        </div>
                        <div>
                          <Label htmlFor="category">Category</Label>
                          <Select name="category" required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="luxury">Luxury</SelectItem>
                              <SelectItem value="suv">SUV</SelectItem>
                              <SelectItem value="trucks">Trucks</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button type="submit">Add Car</Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </div>

                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {cars.map((car) => (
                      <TableRow key={car.id}>
                        <TableCell>{car.name}</TableCell>
                        <TableCell>{car.type}</TableCell>
                        <TableCell>{car.category}</TableCell>
                        <TableCell>${car.price}/day</TableCell>
                        <TableCell>
                          <Button
                            variant="destructive"
                            size="sm"
                            onClick={() => handleDeleteCar(car.id)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}

            {activeTab === "messages" && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Messages</h2>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {messages.map((message) => (
                      <TableRow key={message.id}>
                        <TableCell>{message.name}</TableCell>
                        <TableCell>{message.email}</TableCell>
                        <TableCell>{message.message}</TableCell>
                        <TableCell>{message.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </main>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default Admin;