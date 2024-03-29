import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <a href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </a>
        <MenuItem setActive={setActive} active={active} item="Our Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Basic Music Theory</HoveredLink>
            <HoveredLink href="/courses">Advanced Composition</HoveredLink>
            <HoveredLink href="/courses">Songwriting</HoveredLink>
            <HoveredLink href="/courses">Music Production</HoveredLink>
          </div>
        </MenuItem>
        <a href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Us"
          ></MenuItem>
        </a>
      </Menu>
    </div>
  );
}

export default Navbar;
