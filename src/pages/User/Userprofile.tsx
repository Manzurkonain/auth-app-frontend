import {
    User,
    Mail,
    Shield,
    Calendar,
    KeyRound,
    Globe,
    LogOut,
    Pencil,
} from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";

import { SiGithub } from 'react-icons/si';
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import useAuth from "@/auth/store";
import { useNavigate } from "react-router";

export default function Userprofile() {
    const navigate = useNavigate();
    const logout = useAuth(state => state.logout);
    const user = useAuth(state => state.user);

    return (
        <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-black dark:text-white">
            <div className="container mx-auto px-4 sm:px-6 py-10">
                {/* Header */}
                <section className="mb-10">
                    <h1 className="text-4xl font-bold">
                        Profile
                    </h1>

                    <p className="mt-3 text-slate-600 dark:text-neutral-400">
                        Manage your account information and security settings.
                    </p>
                </section>

                {/* Profile Summary */}
                <section>
                    <Card className="border-slate-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                        <CardContent className="flex flex-col gap-6 p-6 md:flex-row md:items-center">
                            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground">
                                {user?.name?.charAt(0).toUpperCase()}
                            </div>

                            <div>
                                <h2 className="text-2xl font-semibold">
                                    {user?.name}
                                </h2>

                                <p className="text-muted-foreground">
                                    {user?.email}
                                </p>

                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Information Grid */}
                <section className="mt-8 grid gap-6 md:grid-cols-2">
                    {/* Personal Info */}
                    <Card className="border-slate-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                        <CardHeader>
                            <CardTitle>Personal Information</CardTitle>

                            <CardDescription>
                                Basic account details.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-5">
                            <div className="flex items-center gap-3">
                                <User className="h-4 w-4" />
                                <div>
                                    <p className="font-medium">Username</p>
                                    <p className="text-sm text-muted-foreground">
                                        {user?.name}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail className="h-4 w-4" />
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-sm text-muted-foreground">
                                        {user?.email}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Calendar className="h-4 w-4" />
                                <div>
                                    <p className="font-medium">Member Since</p>
                                    <p className="text-sm text-muted-foreground">

                                        {user?.createdAt
                                            ? new Date(user.createdAt).toLocaleDateString("en-IN")
                                            : "N/A"}

                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Account Status */}
                    <Card className="border-slate-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                        <CardHeader>
                            <CardTitle>Account Status</CardTitle>

                            <CardDescription>
                                Current account configuration.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-5">
                            <div className="flex items-center gap-3">
                                <Shield className="h-4 w-4" />
                                <div>
                                    <p className="font-medium">Role</p>
                                    <p className="text-sm text-muted-foreground">
                                        USER
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <Shield className="h-4 w-4" />
                                <div>
                                    <p className="font-medium">Account Status</p>
                                    <p className="text-sm text-green-600">
                                        {user?.enable ? "Active" : "Inactive"}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                <KeyRound className="h-4 w-4" />
                                <div>
                                    <p className="font-medium">Authentication</p>
                                    <p className="text-sm text-muted-foreground">
                                        JWT Enabled
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Security */}
                <section className="mt-8">
                    <Card className="border-slate-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                        <CardHeader>
                            <CardTitle>Security Settings</CardTitle>

                            <CardDescription>
                                Manage authentication and account protection.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="flex flex-wrap gap-3">
                            <Button>
                                Change Password
                            </Button>

                            <Button variant="outline">
                                Enable 2FA
                            </Button>

                            <Button variant="outline">
                                Manage Sessions
                            </Button>
                        </CardContent>
                    </Card>
                </section>

                {/* Connected Accounts */}
                <section className="mt-8">
                    <Card className="border-slate-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                        <CardHeader>
                            <CardTitle>Connected Accounts</CardTitle>

                            <CardDescription>
                                External login providers linked to your account.
                            </CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between rounded-lg border border-border p-4">
                                <div className="flex items-center gap-3">
                                    <Globe className="h-5 w-5" />
                                    <span>Google</span>
                                </div>

                                <span className="text-sm text-green-600">
                                    Connected
                                </span>
                            </div>

                            <div className="flex items-center justify-between rounded-lg border border-border p-4">
                                <div className="flex items-center gap-3">
                                    <SiGithub className="h-5 w-5" />
                                    <span>GitHub</span>
                                </div>

                                <span className="text-sm text-muted-foreground">
                                    Not Connected
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Actions */}
                <section className="mt-8">
                    <Card className="border-slate-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
                        <CardHeader>
                            <CardTitle>Actions</CardTitle>
                        </CardHeader>

                        <CardContent className="flex flex-wrap gap-3">
                            <Button>
                                <Pencil className="mr-2 h-4 w-4" />
                                Edit Profile
                            </Button>

                            <Button variant="outline">
                                Change Password
                            </Button>

                            <Button variant="destructive" onClick={() => { logout(); navigate("/") }} >
                                <LogOut className="mr-2 h-4 w-4" />
                                Logout
                            </Button>

                        </CardContent>
                    </Card>
                </section>
            </div>
        </main>
    );
}