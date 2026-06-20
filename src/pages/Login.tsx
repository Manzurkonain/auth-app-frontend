import { SiGithub } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";

import PageWrapper from "@/components/PageWrapper";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import type LoginData from "@/models/LoginData";
import { useState } from "react";
import toast from "react-hot-toast";
import { loginUser } from "@/Services/AuthService";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import useAuth  from "@/auth/store";
export default function LoginPage() {

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>(null);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  const login = useAuth(state => state.login);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((value) => (
      {
        ...value,
        [e.target.name]: e.target.value
      }
    ));
  }
  const handelFormSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();


    if (loginData.email.trim() === "") {
      toast.error("Email is required!");
      return;
    }
    if (loginData.password.trim() === "") {
      toast.error("Password is required!");
      return;

    }
    try {
      setLoading(true);
      // const result = await loginUser(loginData);
      // console.log(result);
      await login(loginData);
      toast.success("User logged in successfully");
      setLoginData({
        email: '',
        password: '',
      })
      navigate("/dashboard");
    } catch (error: any) {
      console.dir(error);
      setError(error);
      toast.error("Something went wrong");

    }
    finally {
      setLoading(false);
    }
  }


  return (
    <PageWrapper>
      <main className="min-h-[calc(100vh-64px)] bg-slate-50 dark:bg-black shadow:md">

        <div className="container mx-auto flex min-h-[calc(100vh-64px)] items-center justify-center px-4 sm:px-6 py-12">
          <Card
            className="
                        w-full
                        max-w-sm
                        border-slate-200
                        bg-white
                        shadow-xl shadow-black/10
                        dark:border-neutral-800
                        dark:bg-neutral-950
                        dark:shadow-black/40
                      "
          >
            <CardHeader className="space-y-2 text-center">
              <CardTitle className="text-3xl">Welcome Back</CardTitle>
              <CardDescription>
                Sign in to continue to your account
              </CardDescription>
            </CardHeader>

            {/* error handaling */}
            {
              error && (
                <div className="justify-center flex">
                  <Alert variant="destructive" className="w-90 p-2 ">
                    <CheckCircle2Icon />
                    <AlertTitle>{
                      error?.response 
                      ? error?.response?.data?.message
                      : error?.message
                    }
                    </AlertTitle>

                  </Alert>
                </div>
              )
            }

            <CardContent>
              <form onSubmit={handelFormSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleInputChange}
                    placeholder="Enter emai" />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>

                    <Link
                      to="/forgot-password"
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    value={loginData.password}
                    onChange={handleInputChange}
                  />
                </div>
                
                <Button disabled={loading} className="w-full cursor-pointer">
                  
                  {
                    loading ? <> <Spinner /> Please wait...</> : "LogIn"
                  }
                  </Button>
              </form>

              <div className="my-6 flex items-center">
                <div className="h-px flex-1 bg-border" />
                <span className="px-4 text-sm text-muted-foreground">OR</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="space-y-3">
                <Button variant="outline" className="w-full">
                  <FcGoogle className="mr-2 h-5 w-5" />
                  Continue with Google
                </Button>

                <Button variant="outline" className="w-full">
                  <SiGithub className="mr-2 h-4 w-4" />
                  Continue with GitHub
                </Button>
              </div>

              <p className="mt-6 text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/signup" className="font-medium hover:underline">
                  Sign Up
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </PageWrapper>
  );
}