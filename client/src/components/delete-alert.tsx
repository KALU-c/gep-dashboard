import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { ReactElement } from "react";
import { UserProps } from "./Edit";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "@/services/api-client";

const DeleteAlert = ({
  children,
  user,
}: {
  children: ReactElement;
  user: UserProps;
}) => {
  const queryClient = useQueryClient();

  const { mutateAsync: userDeleteMutation } = useMutation({
    mutationFn: handleDelete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });

  async function handleDelete() {
    try {
      await deleteUser(user._id);
    } catch (err) {
      console.log(err);
    }
  }

  async function handleDeleteButton() {
    try {
      await userDeleteMutation();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <AlertDialog>
      {children}
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete
            <span className="font-bold text-white"> {[user.firstName, user.middleName].join(" ")}'s </span>
            account and remove their data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteButton}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
export default DeleteAlert;
