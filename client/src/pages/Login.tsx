import { Link, useNavigate } from "react-router-dom";
import { checkAdminInfo } from "@/services/api-client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import { ChangeEvent, useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";

export type AdminData = {
  email: string;
  password: string;
};

export default function Login() {
  const { setAdmin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [adminInfo, setAdminInfo] = useState<AdminData>({
    email: "",
    password: "",
  });

  async function handleSubmit() {
    try {
      const result = await checkAdminInfo(adminInfo);
      setAdmin(result);
      if (result) {
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setAdminInfo({ ...adminInfo, [event.target.name]: event.target.value });
  }

  return (
    <>
      <Navbar hideTabs={true} />
      <div className="h-screen py-36">
        <Card className="mx-auto max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder=""
                  required
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {/* <Link to="#" className="ml-auto inline-block text-sm underline">
                Forgot your password?
              </Link> */}
                </div>
                <Input
                  name="password"
                  id="password"
                  type="password"
                  required
                  onChange={(event) => handleChange(event)}
                />
              </div>
              <Button type="submit" className="w-full" onClick={handleSubmit}>
                Login
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
