"use client";
import {
  Button,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const path = usePathname();

  return (
    <Navbar className="bg-secondary/20 backdrop-blur">
      <NavbarContent className="sm:flex gap-4" justify="center">
        <NavbarItem>
          <Button
            href="/"
            as={Link}
            color={path === "/" ? "primary" : "default"}
            variant="light"
            disableRipple
          >
            Octavian Ratiu
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            href="/experience"
            as={Link}
            color={path === "/experience" ? "primary" : "default"}
            variant="light"
            disableRipple
          >
            Experience
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="lg:flex">
          <ThemeSwitcher />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default NavBar;
