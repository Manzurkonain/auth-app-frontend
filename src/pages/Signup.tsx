import React, { useState } from 'react';
import { SiGithub } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router';
import PageWrapper from '../components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'react-hot-toast';
import type RegisterData from '@/models/Registerdata';
import registerUser from '@/Services/AuthService';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default function SignupPage() {
  const [data, setData] = useState<RegisterData>({
    name: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    console.log(e.target.name);
    console.log(e.target.value);
    setData((value) => (
      {
        ...value,
        [e.target.name]: e.target.value
      }
    ));
  }

  const handelFormSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log(data);

    if (data.name.trim() === "") {
      toast.error("Name is required");
    }
    if (data.email.trim() === "") {
      toast.error("Name is required");
    }
    if (data.password.trim() === "") {
      toast.error("Name is required");
    }
    try {
      const result = await registerUser(data);
      console.log(result);
      toast.success("User registered successfully");
      setData({
        name: '',
        email: '',
        password: '',
      })
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  }


  return (
    <PageWrapper>
      <main className="min-h-[calc(100vh-64px)] bg-slate-50 dark:bg-black shadow-md">
        <div className="container mx-auto flex min-h-[calc(100vh-64px)] items-center justify-center px-4 sm:px-6 py-12">
          <Card className="w-full max-w-sm border-slate-200 bg-white shadow-xl shadow-black/10 dark:border-neutral-800 dark:bg-neutral-950 dark:shadow-black/40">
            <CardHeader className="space-y-2 text-center">
              <CardTitle className="text-3xl">Sign Up</CardTitle>
              <CardDescription>
                Create an account to continue to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-5" onSubmit={handelFormSubmit} >
                <div className="space-y-2">
                  <Label htmlFor="name">Username</Label>
                  <Input
                    id="name"
                    placeholder="Enter username"
                    name="name"
                    value={data.name}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    value={data.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    value={data.password}
                    onChange={handleInputChange}
                  />
                </div>
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button className="w-full" type="submit" disabled={loading}>
                  {loading ? 'Creating account...' : 'Sign Up'}
                </Button>
              </form>

              <div className="my-6 flex items-center">
                <div className="h-px flex-1 bg-border" />
                <span className="px-4 text-sm text-muted-foreground">OR</span>
                <div className="h-px flex-1 bg-border" />
              </div>

              <div className="space-y-3">
                <Button variant="outline" className="w-full" type="button">
                  <FcGoogle className="mr-2 h-5 w-5" /> Continue with Google
                </Button>
                <Button variant="outline" className="w-full" type="button">
                  <SiGithub className="mr-2 h-4 w-4" /> Continue with GitHub
                </Button>
              </div>

              <p className="mt-6 text-center text-sm text-muted-foreground">
                Already have an account?{' '}
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
