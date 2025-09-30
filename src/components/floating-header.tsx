"use client";

import React from "react";
import { CircleUserRoundIcon, MenuIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { navigationItems, socialLinks } from "@/data/links";

export function FloatingHeader() {
  const [open, setOpen] = React.useState(false);
  return (
    <header
      className={cn(
        "fixed top-5 left-0 right-0 z-50",
        "mx-auto max-w-3xl rounded-lg border shadow",
        "bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg",
      )}
    >
      <nav className="mx-auto flex items-center justify-between p-1.5">
        <div className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100">
          <CircleUserRoundIcon className="size-5" />
          <p className="font-mono text-lg font-bold">Nayan Kasturi</p>
        </div>
        <div className="hidden items-center gap-1 md:flex">
          {navigationItems.map((link) => (
            <Link
              key={link.label}
              className={buttonVariants({ variant: "ghost", size: "sm" })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <Button size="sm" className="text-lg">
            Login
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <Button
              size="icon"
              variant="outline"
              onClick={() => setOpen(!open)}
              className="md:hidden"
            >
              <MenuIcon className="size-4" />
            </Button>
            <SheetContent
              className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
              showClose={false}
              side="left"
            >
              <SheetHeader>
                <SheetTitle className="text-2xl">Nayan Kasturi</SheetTitle>
                <SheetDescription className="text-lg">Raanna</SheetDescription>
              </SheetHeader>
              <div className="grid gap-y-2 overflow-y-auto px-4 pt-5 text-3xl">
                {navigationItems.map((link) => (
                  <Link
                    key={link.label}
                    className={buttonVariants({
                      variant: "ghost",
                      className: "justify-start w-full",
                    })}
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <SheetFooter className="flex w-full items-center justify-center">
                <h3>Connect with Me</h3>
                <div className="gap-4">
                  {socialLinks
                    .slice(0, 4)
                    .map((social: (typeof socialLinks)[number]) => (
                      <Link
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          key={social.label}
                          variant="default"
                          size="icon"
                          className="mx-1"
                        >
                          {social.icon}
                        </Button>
                      </Link>
                    ))}
                </div>
                <div className="gap-4">
                  {socialLinks
                    .slice(4)
                    .map((social: (typeof socialLinks)[number]) => (
                      <Link
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          key={social.label}
                          variant="default"
                          size="icon"
                          className="mx-1"
                        >
                          {social.icon}
                        </Button>
                      </Link>
                    ))}
                </div>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
