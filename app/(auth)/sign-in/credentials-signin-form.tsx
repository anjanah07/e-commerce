"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signInDefaultValues } from "@/lib/constants";
import Link from "next/link";

const CredentialsSignInForm = () => {
  const formDataReferences = [
    {
      id: "email",
      defaultValue: signInDefaultValues.email,
      text: "Email",
    },
    {
      id: "password",
      defaultValue: signInDefaultValues.password,
      text: "Password",
    },
  ];
  return (
    <form>
      <div className="space-y-6">
        {formDataReferences.map((val) => (
          <div key={val.id}>
            <Label htmlFor={val.id}>{val.text}</Label>
            <br />
            <Input
              id={val.id}
              name={val.id}
              type={val.id}
              required
              autoComplete={val.id}
              defaultValue={val.defaultValue}
            />
          </div>
        ))}
        <div>
          <Button className="w-full" variant={"default"}>
            Sign In
          </Button>
        </div>
        <div className="text-sm text-center text-muted-foreground">
          Don&apos;t have an account? {""}
          <Link href={"/sign-up"} target="_self" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
