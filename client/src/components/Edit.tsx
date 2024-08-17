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
// import { DrawerUsersView } from "./drawer-users-view";

export type UserProps = {
  _id: string;
  firstName: string;
  middleName: string;
  lastName: string;
  age: number;
  gender: string;
  phone: string;
  education: string;
  church: string;
  fellowShip: string;
};

export default function Edit({ user }: { user: UserProps }) {
  return (
    <DeleteAlert user={user}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">Open menu</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <EditDialog user={user}>
          {/* <DrawerUsersView users={user}> */}
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
              {/* <DrawerTrigger asChild> */}
                <DropdownMenuItem>View detail</DropdownMenuItem>
              {/* </DrawerTrigger> */}
            </DropdownMenuContent>
          {/* </DrawerUsersView> */}
        </EditDialog>
      </DropdownMenu>
    </DeleteAlert>
  );
}
