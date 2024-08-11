import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChangeEvent, ReactElement, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { UserProps } from "./Edit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "@/services/api-client";
import { DialogClose } from "@radix-ui/react-dialog";

const EditDialog = ({
  children,
  user,
}: {
  children: ReactElement;
  user: UserProps;
}) => {
  const queryClient = useQueryClient();

  const [userInfo, setUserInfo] = useState({
    id: user.id,
    firstName: user.firstName,
    middleName: user.middleName,
    lastName: user.lastName,
    age: user.age,
    phone: user.phone,
    gender: user.gender,
    education: user.education,
    church: user.church,
    fellowShip: user.fellowShip,
  });

  const { mutateAsync: updateUserMutation } = useMutation({
    mutationFn: handleUpdatedUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  async function handleUpdatedUser() {
    try {
      const updatedUser = await updateUser(user.id, userInfo);
      setUserInfo(updatedUser);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleEdit() {
    try {
      await updateUserMutation();
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setUserInfo({ ...userInfo, [event.target.id]: event.target.value });
  }

  return (
    <Dialog>
      {children}
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit User Info</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Age
            </Label>
            <Input
              id="age"
              defaultValue={userInfo.age}
              onChange={(event) => handleChange(event)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              First Name
            </Label>
            <Input
              id="firstName"
              defaultValue={`${userInfo.firstName}`}
              onChange={(event) => handleChange(event)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Middle Name
            </Label>
            <Input
              id="middleName"
              defaultValue={`${userInfo.middleName}`}
              onChange={(event) => handleChange(event)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Last Name
            </Label>
            <Input
              id="lastName"
              defaultValue={`${userInfo.lastName}`}
              onChange={(event) => handleChange(event)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Phone
            </Label>
            <Input
              id="phone"
              type="string"
              defaultValue={userInfo.phone}
              onChange={(event) => handleChange(event)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="education" className="text-right">
              Education
            </Label>
            <Input
              id="education"
              defaultValue={`${userInfo.education}`}
              onChange={(event) => handleChange(event)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="church" className="text-right">
              Church
            </Label>
            <Input
              id="church"
              defaultValue={`${userInfo.church}`}
              onChange={(event) => handleChange(event)}
              className="col-span-3"
              required
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fellowShip" className="text-right">
              Fellow Ship
            </Label>
            <Input
              id="fellowShip"
              defaultValue={`${userInfo.fellowShip}`}
              onChange={(event) => handleChange(event)}
              className="col-span-3"
              required
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button type="button" onClick={handleEdit}>
              Save changes
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default EditDialog;
