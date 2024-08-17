import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { ReactNode, useState } from "react";
import { UserInfoType } from "./edit-dialog";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";

// -> Not Functional

export function DrawerUsersView({
  children,
  users,
}: {
  children: ReactNode;
  users: UserInfoType;
}) {
  const [disableEdit, setDisableEdit] = useState(true);
  return (
    <Drawer>
      {children}
      {/* <DrawerTrigger asChild>
        <Button variant="outline">Open Drawer</Button>
      </DrawerTrigger> */}
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>User Detail</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <Label>Age</Label>
            <Input disabled={disableEdit} name="age" value={users?.age} />
            <Label>First Name</Label>
            <Input
              disabled={disableEdit}
              name="firstName"
              value={users?.firstName}
            />
            <Label>Middle Name</Label>
            <Input
              disabled={disableEdit}
              name="middleName"
              value={users?.middleName}
            />
            <Label>Last Name</Label>
            <Input
              disabled={disableEdit}
              name="lastName"
              value={users?.lastName}
            />
            <Label>Phone Number</Label>
            <Input disabled={disableEdit} name="phone" value={users?.phone} />
            <Label>Education</Label>
            <Input
              disabled={disableEdit}
              name="education"
              value={users?.education}
            />
            <Label>Church</Label>
            <Input disabled={disableEdit} name="church" value={users?.church} />
            <Label>Fellow Ship</Label>
            <Input
              disabled={disableEdit}
              name="fellowShip"
              value={users?.fellowShip}
            />
          </div>
          <DrawerFooter>
            <Button onClick={() => setDisableEdit(false)}>Edit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export function DrawerUserTrigger({ user }: { user: UserInfoType }) {
  return (
    <DrawerUsersView users={user}>
    <DrawerTrigger asChild>
      <DropdownMenuItem>View detail</DropdownMenuItem>
    </DrawerTrigger>
    </DrawerUsersView>
  );
}
