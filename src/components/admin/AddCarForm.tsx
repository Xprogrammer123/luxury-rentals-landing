
import { useState } from "react";
import { Upload } from "lucide-react";
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

interface AddCarFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const AddCarForm = ({ onSubmit }: AddCarFormProps) => {
  const [image, setImage] = useState<string | null>(null);

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Car Name</Label>
        <Input id="name" name="name" required />
      </div>

      <div>
        <Label htmlFor="image">Upload Image</Label>
        <label
          htmlFor="image"
          className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer hover:border-gray-500"
        >
          {image ? (
            <img src={image} alt="Preview" className="w-full h-40 object-cover rounded-md" />
          ) : (
            <div className="flex flex-col items-center">
              <Upload className="h-12 w-12 text-gray-500" />
              <span className="text-gray-500 mt-2">Click to upload</span>
            </div>
          )}
        </label>
        <Input
          id="image"
          name="image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(event) => {
            const file = event.target.files?.[0];
            if (file) {
              setImage(URL.createObjectURL(file));
            }
          }}
        />
      </div>

      <div>
        <Label htmlFor="price">Price per Day</Label>
        <Input id="price" name="price" type="number" required />
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
  );
};
