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
import { motion, useScroll } from "framer-motion";

const NavBar = () => {
  const path = usePathname();
  const { scrollYProgress } = useScroll();
  return (
    <>
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
      <motion.div
        className="fixed top-0 left-0 right-0 h-1.5 origin-left bg-accent z-30"
        style={{ scaleX: scrollYProgress }}
      />
    </>
  );
};

export default NavBar;
