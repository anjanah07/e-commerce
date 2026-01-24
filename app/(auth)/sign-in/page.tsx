import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { APP_NAME } from "@/lib/constants";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CredentialsSignInForm from "./credentials-signin-form";
export const metadata: Metadata = {
  title: "Sign In",
};
const SignInPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <Card>
          <CardHeader className="space-y-4 flex flex-col justify-center items-center">
            <Link href={"/"} className="">
              <Image
                src={"/images/logo.svg"}
                width={100}
                height={100}
                alt={`${APP_NAME} logo`}
                priority
              />
            </Link>
            <CardTitle className="text-center">Sign in</CardTitle>
            <CardDescription className="text-center">
              Sign in to your account
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <CredentialsSignInForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SignInPage;
