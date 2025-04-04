import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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

interface ProductsTableProps {
  cars: Car[];
  onDeleteCar: (slug: string) => void;
  onEditCar: (car: Car) => void;
}

export const ProductsTable = ({
  cars,
  onDeleteCar,
  onEditCar,
}: ProductsTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Color</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cars.map((car) => (
          <TableRow key={car.id}>
            <TableCell>
              {car.make} {car.model} {car.year}
            </TableCell>
            <TableCell>{car.color}</TableCell>
            <TableCell>{car.category.name}</TableCell>
            <TableCell>${car.price_per_day}/day</TableCell>
            <TableCell className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEditCar(car)}
              >
                Edit
              </Button>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDeleteCar(car.slug)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
