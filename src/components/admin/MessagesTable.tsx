
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Message {
  id: number;
  name: string;
  email: string;
  message: string;
  date: string;
}

interface MessagesTableProps {
  messages: Message[];
}

export const MessagesTable = ({ messages }: MessagesTableProps) => {
  return (
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
  );
};
