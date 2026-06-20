import {
  User,
  Shield,
  KeyRound,
  Activity,
  Clock,
  Edit,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useAuth from "@/auth/store";

export default function Userhome() {
  const user = useAuth(state => state.user);
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-black dark:text-white">
      <div className="container mx-auto px-4 sm:px-6 py-10">
        {/* Header */}
        <section className="mb-10">
          <h1 className="text-4xl font-bold">
            Welcome Back {user?.name}
          </h1>

          <p className="mt-3 text-slate-600 dark:text-neutral-400">
            Manage your account and security settings.
          </p>
        </section>

        {/* Overview Cards */}
        <section className="grid gap-6 md:grid-cols-2">
          <Card className="border-slate-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
            <CardHeader>
              <User className="h-5 w-5" />
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Manage your profile and personal information.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="font-medium">Profile Management</p>

              <p className="text-sm text-muted-foreground">
                Update account details and preferences.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
            <CardHeader>
              <Shield className="h-5 w-5" />
              <CardTitle>Security</CardTitle>
              <CardDescription>
                Authentication and account protection.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <p className="font-medium">Security Controls</p>

              <p className="text-sm text-muted-foreground">
                Manage passwords, sessions and access settings.
              </p>
            </CardContent>
          </Card>

          
        </section>
        {/* Security Overview */}
        <section className="mt-10">
          <Card className="border-slate-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
            <CardHeader>
              <CardTitle>
                Security Overview
              </CardTitle>

              <CardDescription>
                Authentication and authorization status.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div>
                  <KeyRound className="mb-2 h-5 w-5" />
                  <h3 className="font-medium">
                    JWT Authentication
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Access and refresh token active.
                  </p>
                </div>

                <div>
                  <Shield className="mb-2 h-5 w-5" />
                  <h3 className="font-medium">
                    Authorization
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Role-based access enabled.
                  </p>
                </div>

                <div>
                  <Clock className="mb-2 h-5 w-5" />
                  <h3 className="font-medium">
                    Active Session
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Current device authenticated.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Quick Actions */}
        <section className="mt-10">
          <Card className="border-slate-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
            <CardHeader>
              <CardTitle>
                Quick Actions
              </CardTitle>

              <CardDescription>
                Frequently used account actions.
              </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-wrap gap-3">
              <Button>
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </Button>

              <Button variant="outline">
                Change Password
              </Button>

              <Button variant="outline">
                Manage Sessions
              </Button>
            </CardContent>
          </Card>
        </section>

       
      </div>
    </main>
  );
}