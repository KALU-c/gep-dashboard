import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@radix-ui/react-dropdown-menu";
import { Link } from "react-router-dom";
import { DropdownMenuContent, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { CircleUser, Menu, Component } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { SheetTrigger, SheetContent, Sheet } from "./ui/sheet";

type Props = {
  hideTabs?: boolean;
};

const Navbar = ({ hideTabs = false }: Props) => {
  return (
    <header className="sticky top-0 flex h-14 items-center gap-4 border-b bg-background px-4 md:px-6 z-10">
      <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          to={hideTabs ? "#" : "/"}
          className="flex items-center gap-2 text-lg font-semibold md:text-base"
        >
          <Component className="h-6 w-6" />
          <span className="sr-only">GEP</span>
        </Link>
        {!hideTabs && (
          <>
            <Link
              to="/"
              className="text-muted-foreground rounded-sm transition-colors hover:text-foreground"
            >
              Dashboard
            </Link>
            <Link
              to="/users"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Users
            </Link>
          </>
        )}
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to={hideTabs ? "#" : "/"}
              className="flex items-center gap-2 text-lg font-semibold"
            >
              <Component className="h-6 w-6" />
              <span className="sr-only">GEP</span>
            </Link>
            {!hideTabs && (
              <>
                <Link to="/" className="hover:text-foreground">
                  Dashboard
                </Link>
                <Link
                  to="/users"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Users
                </Link>
              </>
            )}
          </nav>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <div className="ml-auto flex-1 sm:flex-initial">
          <ModeToggle />
        </div>
        {!hideTabs ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <Link to="/login"><DropdownMenuItem>Logout</DropdownMenuItem></Link>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex gap-4">
            <Link to="/login">
              <Button className="text-foreground w-full px-10 bg-transparent border-2 border-zinc-700">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="text-foreground w-full px-10 bg-transparent border-2 border-zinc-700">
                Register
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};
export default Navbar;
