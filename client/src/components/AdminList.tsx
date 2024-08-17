import { Badge } from "@/components/ui/badge";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { addAdmin, fetchAdmins } from "@/services/api-client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { ChangeEvent, useState } from "react";
import { toast } from "sonner";

type AdminDataType = {
  _id: string;
  name: string;
  email: string;
  date: string;
};

export type NewAdminType = {
  name: string;
  email: string;
  password: string;
};

export default function AdminList() {
  const queryClient = useQueryClient();
  const [newAdmin, setNewAdmin] = useState<NewAdminType>({
    name: "",
    email: "",
    password: "",
  });

  const { data, error, isLoading } = useQuery({
    queryKey: ["admins"],
    queryFn: fetchAdmins,
  });

  const { mutateAsync: addAdminMutation } = useMutation({
    mutationFn: handleSubmit,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admins"] });
    },
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong, while fetching admin data...</p>;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setNewAdmin({ ...newAdmin, [name]: value });
  }

  async function handleSubmit() {
    try {
      await addAdmin(newAdmin);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleAddNewAdmin() {
    try {
      if(
        newAdmin.name &&
        newAdmin.email &&
        newAdmin.password
      ) {
        toast("Admin data added successfully", {
          description: "Now the admin can login using his email and password",
          className: "dark:bg-black text-green-500 font-bold"
        });
        await addAdminMutation();
      } else {
        toast("Input Field Is Empty", {
          description: "Please fill all the inputs, and try again",
          className: "text-red-600 font-bold dark:bg-black"
        });
      }
    } catch (err) {
      console.log(err);
      toast("Something went wrong", {
        description: "Please check your internet connection",
        className: "text-red-600 font-bold dark:bg-black"
      });
    }
  }

  return (
    <>
      <div className="flex justify-between items-center">
        <CardHeader className="px-7">
          <CardTitle>Admins</CardTitle>
          <CardDescription>Admins can edit or delete user data</CardDescription>
        </CardHeader>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="mr-7">Add new admin</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add new admin</DialogTitle>
              <DialogDescription>
                Fill all required information. Click add when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  className="col-span-3"
                  onChange={(event) => handleChange(event)}
                  value={newAdmin.name}
                  required={true}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  className="col-span-3"
                  onChange={(event) => handleChange(event)}
                  value={newAdmin.email}
                  required={true}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  className="col-span-3"
                  onChange={(event) => handleChange(event)}
                  value={newAdmin.password}
                  required={true}
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose>
                <Button type="submit" onClick={handleAddNewAdmin}>
                  Add
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((admin: AdminDataType) => (
              <TableRow key={admin._id}>
                <TableCell>
                  <div className="font-medium">{admin?.name}</div>
                  <div className="hidden text-sm text-muted-foreground md:inline">
                    {admin?.email}
                  </div>
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <Badge className="text-xs" variant="secondary">
                    Admin
                  </Badge>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {admin?.date.slice(0, 10)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </>
  );
}
