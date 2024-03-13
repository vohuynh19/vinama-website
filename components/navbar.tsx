import {
  Link,
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarMenuItem,
} from "@nextui-org/react";

import { siteConfig } from "@/config/site";
import NextLink from "next/link";

import Image from "next/image";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="bg-transparent">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <div className="h-16 py-4">
              <Image
                className="h-full w-full"
                alt="app-logo"
                src={"/images/vinama-logo.png"}
                width={180}
                height={73.19}
              />
            </div>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="text-white" />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
