import { useState } from "react";
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

interface EditCarFormProps {
  initialValues: {
    make: string;
    model: string;
    year: number;
    color: string;
    price_per_day: string;
    category_id: number;
  };
  categories: { id: number; name: string; slug: string }[];
  onSubmit: (data: {
    make: string;
    model: string;
    year: number;
    color: string;
    price_per_day: string;
    category_id: number;
  }) => void;
}

export const EditCarForm = ({
  initialValues,
  categories,
  onSubmit,
}: EditCarFormProps) => {
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: name === "year" || name === "category_id" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="make">Make</Label>
        <Input
          id="make"
          name="make"
          value={formValues.make}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="model">Model</Label>
        <Input
          id="model"
          name="model"
          value={formValues.model}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="year">Year</Label>
        <Input
          id="year"
          name="year"
          type="number"
          value={formValues.year}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="color">Color</Label>
        <Input
          id="color"
          name="color"
          value={formValues.color}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="price_per_day">Price per Day</Label>
        <Input
          id="price_per_day"
          name="price_per_day"
          type="number"
          value={formValues.price_per_day}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <Label htmlFor="category_id">Category</Label>
        <Select
          name="category_id"
          value={String(formValues.category_id)}
          onValueChange={(value) =>
            setFormValues((prev) => ({
              ...prev,
              category_id: Number(value),
            }))
          }
          required
        >
          <SelectTrigger>
            <SelectValue placeholder="Select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category.id} value={String(category.id)}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button type="submit">Save Changes</Button>
    </form>
  );
};
