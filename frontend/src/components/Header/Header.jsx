import { Link } from "react-router-dom";

// Shadcn components:
import { Button } from "../ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

// third-party libraries
import { PuzzleIcon } from "lucide-react";
import { ShoppingBagIcon } from "lucide-react";
import { UserCircle2Icon } from "lucide-react";

const linkStyles = "flex gap-2 text-white hover:opacity-75";

function Header() {
  return (
    <header className="flex justify-between items-center p-8 max-w-full bg-teal-900">
      <Link to="/">
        <h1 className={linkStyles}>
          <PuzzleIcon />
          RDJ-Comm
        </h1>
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link to="/cart" className={linkStyles}>
                <ShoppingBagIcon /> Cart
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/login" className={linkStyles}>
              <UserCircle2Icon /> Login
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default Header;
