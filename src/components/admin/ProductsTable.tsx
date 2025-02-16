
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
  name: string;
  image: string;
  price: number;
  type: string;
  category: "luxury" | "suv" | "trucks";
}

interface ProductsTableProps {
  cars: Car[];
  onDeleteCar: (id: number) => void;
}

export const ProductsTable = ({ cars, onDeleteCar }: ProductsTableProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cars.map((car) => (
          <TableRow key={car.id}>
            <TableCell>{car.name}</TableCell>
            <TableCell>{car.category}</TableCell>
            <TableCell>${car.price}/day</TableCell>
            <TableCell>
              <Button
                variant="destructive"
                size="sm"
                onClick={() => onDeleteCar(car.id)}
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
