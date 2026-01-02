"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, SunMoon, Moon, Divide } from "lucide-react";
import { useEffect, useState } from "react";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const setMount = () => {
      setMounted(true);
    };
    setMount();
  }, []);
  if (!mounted) {
    return null;
  }
  const modeOptions = [
    {
      code: "system",
      description: "System",
    },
    {
      code: "dark",
      description: "Dark",
    },
    {
      code: "light",
      description: "Light",
    },
  ];
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="focus-visible:ring-0 focus-visible:ring-o"
        >
          {theme === "system" ? (
            <SunMoon />
          ) : theme === "dark" ? (
            <Moon />
          ) : (
            <SunIcon />
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Appearance</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {modeOptions.map((mode) => (
          <div key={mode.code}>
            <DropdownMenuCheckboxItem
              checked={theme === mode.code}
              onClick={() => setTheme(mode.code)}
            >
              {mode.description}
            </DropdownMenuCheckboxItem>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
