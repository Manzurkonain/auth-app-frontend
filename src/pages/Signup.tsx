import { SiGithub } from "react-icons/si";
import { FcGoogle} from "react-icons/fc";
import { Link } from "react-router";

import PageWrapper from "../components/PageWrapper";

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

export default function SignupPage() {
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
              <CardTitle className="text-3xl">Sign Up</CardTitle>
              <CardDescription>
                Create an account to continue to your account
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Username</Label>
                  <Input id="name" placeholder="Enter username" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter email" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter password"
                  />
                </div>

                <Button className="w-full">Sign Up</Button>
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
                Already have an account?{" "}
                <Link to="/login" className="font-medium hover:underline">
                  Login
                </Link>
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </PageWrapper>
  );
}