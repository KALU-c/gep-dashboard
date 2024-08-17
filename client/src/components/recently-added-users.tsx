import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserInfoType } from "./edit-dialog";

const RecentlyAddedUsers = ({ users }: { users: UserInfoType[] }) => {

  return (
    <>
      <CardHeader>
        <CardTitle>Recently added users</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {users?.slice(-5)?.map((user: UserInfoType) => (
          <div className="flex items-center gap-4" key={user._id}>
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src="/avatars/01.png" alt="Avatar" />
              <AvatarFallback>{[user.firstName.slice(0, 1), user.middleName.slice(0, 1)].join("")}</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{[user.firstName, user.middleName].join(" ")}</p>
              <p className="text-sm text-muted-foreground">
                {user.phone}
              </p>
            </div>
            <div className="ml-auto font-medium">{user.fellowShip}</div>
          </div>
        ))}
      </CardContent>
    </>
  );
};
export default RecentlyAddedUsers;
