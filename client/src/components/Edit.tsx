import { Button } from "@/components/ui/button";
import { DialogTrigger } from "@/components/ui/dialog";

import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import EditDialog from "./edit-dialog";
import DeleteAlert from "./delete-alert";

export type UserProps = {
  id: number,
  name: string;
  age: number;
  phone: number;
  email: string;
  education: string;
};

export default function Edit({ user }: { user: UserProps }) {
  return (
    <EditDialog user={user}>
      <DeleteAlert user={user}>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>

            {/* Edit Dialog Trigger */}

            <DialogTrigger asChild>
              <DropdownMenuItem>Edit</DropdownMenuItem>
            </DialogTrigger>

            {/* Edit Dialog Trigger */}

            <AlertDialogTrigger asChild>
              <DropdownMenuItem>Delete</DropdownMenuItem>
            </AlertDialogTrigger>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View detail</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(user.name)}
            >
              Copy user's name
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </DeleteAlert>
    </EditDialog>
  );
}
