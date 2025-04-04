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

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface AddCarFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  categories: Category[];
}

export const AddCarForm = ({ onSubmit, categories }: AddCarFormProps) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="flex space-x-4">
        <div>
          <Label htmlFor="make">Make</Label>
          <Input id="make" name="make" required />
        </div>

        <div>
          <Label htmlFor="model">Model</Label>
          <Input id="model" name="model" required />
        </div>

        <div>
          <Label htmlFor="year">Year</Label>
          <Input id="year" name="year" type="number" required />
        </div>
      </div>
      <div className="flex justify-between w-full space-x-4">
        <div className="w-full">
          <Label htmlFor="color">Color</Label>
          <Input id="color" name="color" required />
        </div>

        <div className="w-full">
          <Label htmlFor="price_per_day">Price per Day</Label>
          <Input
            id="price_per_day"
            name="price_per_day"
            type="number"
            required
          />
        </div>
      </div>

      <div>
        <Label htmlFor="category_id">Category</Label>
        <Select name="category_id" required>
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent
            style={{ backgroundColor: "white", cursor: "pointer" }}
          >
            {categories.map((category) => (
              <SelectItem key={category.id} value={String(category.id)}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="image">Upload Image</Label>
        <label
          htmlFor="image"
          className="border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center p-6 cursor-pointer hover:border-gray-500"
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-40 object-cover rounded-md"
            />
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
              setImagePreview(URL.createObjectURL(file));
            }
          }}
        />
      </div>

      <Button type="submit">Add Car</Button>
    </form>
  );
};
