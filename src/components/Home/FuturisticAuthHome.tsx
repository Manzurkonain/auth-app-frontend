import {
  ArrowRight,
  Check,
  Globe,
  KeyRound,
  Lock,
  RefreshCcw,
  Shield,
  Users,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import PageWrapper from "../PageWrapper";

export default function FuturisticAuthHome() {
  const features = [
    {
      icon: Shield,
      title: "JWT Authentication",
      description:
        "Secure authentication using access and refresh tokens.",
    },
    {
      icon: KeyRound,
      title: "Role-Based Access",
      description:
        "Control resource access using roles and permissions.",
    },
    {
      icon: RefreshCcw,
      title: "Refresh Token Rotation",
      description:
        "Maintain secure long-lived sessions without compromising security.",
    },
    {
      icon: Globe,
      title: "OAuth Integration",
      description:
        "Authenticate using Google, GitHub and external providers.",
    },
    {
      icon: Users,
      title: "Session Management",
      description:
        "Track and manage active authenticated sessions.",
    },
    {
      icon: Lock,
      title: "Password Security",
      description:
        "Secure password storage using BCrypt hashing.",
    },
  ];

  return (
    <PageWrapper>
    <main className="min-h-screen bg-slate-50 text-slate-950 dark:bg-black dark:text-white">
      {/* HERO */}
      <section className="container mx-auto px-4 sm:px-6">
        <div className="flex min-h-[80vh] flex-col items-center justify-center text-center">
          <Badge
            variant="outline"
            className="
              mb-8
              border-slate-300
              bg-white
              text-slate-700
              dark:border-neutral-800
              dark:bg-neutral-950
              dark:text-neutral-300
            "
          >
            Authentication Platform
          </Badge>

          <h1 className="max-w-5xl text-5xl font-bold tracking-tight md:text-7xl">
            Authentication for
            <span className="block text-slate-600 dark:text-neutral-400">
              Modern Applications
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg text-slate-600 dark:text-neutral-400 md:text-xl">
            Secure authentication and authorization built with
            Spring Boot, React, JWT, refresh token rotation and
            role-based access control.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button variant="outline" size="lg">
              Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="container mx-auto px-4 sm:px-6">
        <div
          className="
            rounded-2xl border
            border-slate-200
            bg-white
            dark:border-neutral-800
            dark:bg-neutral-950
          "
        >
          <div className="grid grid-cols-2 gap-6 p-6 md:grid-cols-4">
            {[
              "JWT Authentication",
              "Role-Based Access",
              "Refresh Tokens",
              "OAuth Ready",
            ].map((item) => (
              <div
                key={item}
                className="
                  flex items-center justify-center gap-2
                  text-sm
                  text-slate-600
                  dark:text-neutral-400
                "
              >
                <Check className="h-4 w-4" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container mx-auto px-4 sm:px-6 py-28">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Core Features
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-neutral-400">
            Everything required to build secure authentication
            into modern applications.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="
                  border-slate-200
                  bg-white
                  dark:border-neutral-800
                  dark:bg-neutral-950
                "
              >
                <CardHeader>
                  <div
                    className="
                      mb-4 flex h-12 w-12 items-center justify-center rounded-lg
                      border
                      border-slate-200
                      bg-slate-100
                      dark:border-neutral-800
                      dark:bg-black
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  <CardTitle>
                    {feature.title}
                  </CardTitle>

                  <CardDescription>
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </section>

      {/* SECURITY */}
      <section className="container mx-auto px-4 sm:px-6 pb-28">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold">
            Security Overview
          </h2>

          <p className="mt-4 text-lg text-slate-600 dark:text-neutral-400">
            Built around modern authentication and authorization practices.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card
            className="
              border-slate-200
              bg-white
              dark:border-neutral-800
              dark:bg-neutral-950
            "
          >
            <CardHeader>
              <CardTitle>Authentication</CardTitle>

              <CardDescription>
                Identity verification and session management.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>JWT Access Tokens</div>
              <div>Refresh Token Rotation</div>
              <div>Session Tracking</div>
              <div>Password Verification</div>
            </CardContent>
          </Card>

          <Card
            className="
              border-slate-200
              bg-white
              dark:border-neutral-800
              dark:bg-neutral-950
            "
          >
            <CardHeader>
              <CardTitle>Authorization</CardTitle>

              <CardDescription>
                Resource protection and access validation.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div>Role Management</div>
              <div>Permission Validation</div>
              <div>Protected API Routes</div>
              <div>Access Control Policies</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 pb-24">
        <div
          className="
            rounded-2xl border
            border-slate-200
            bg-white
            p-12
            text-center
            dark:border-neutral-800
            dark:bg-neutral-950
          "
        >
          <h2 className="text-4xl font-bold">
            Ready to Get Started?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-neutral-400">
            Create an account and explore a complete authentication
            workflow built with modern security standards.
          </p>

          <Button size="lg" className="mt-8">
            Create Account
          </Button>
        </div>
      </section>
    </main>
        </PageWrapper>
  );
}