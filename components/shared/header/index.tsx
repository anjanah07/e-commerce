import { Button } from "@/components/ui/button";
import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, UserIcon } from "lucide-react";
import ModeToggle from "./mode-toggle";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="flex flex-row justify-between">
        <div className="flex-start p-3">
          <Link href={"/"} className="flex flex-row items-center justify-start">
            <Image
              src={"/images/logo.svg"}
              alt="Logo image"
              height={48}
              width={48}
              priority
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2 p-3">
          <ModeToggle />
          <Button asChild variant={"ghost"}>
            <Link href={"/cart"}>
              <ShoppingCart /> Cart
            </Link>
          </Button>
          <Button asChild>
            <Link href={"/signin"}>
              <UserIcon /> Sign In
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
