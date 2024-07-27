// Shadcn components:

import { Button } from "../ui/button";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

// third-party libraries
import { PuzzleIcon } from "lucide-react";
import { ShoppingBagIcon } from "lucide-react";
import { UserCircle2Icon } from "lucide-react";

function Header() {
  return (
    <header className="flex justify-between items-center p-3 max-w-full bg-teal-900">
      <h1 className="flex text-xxl gap-3 font-bold text-white ">
        <PuzzleIcon />
        RDJ-Comm
      </h1>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink>
              <Button variant="link" className="flex gap-2 text-white">
                <ShoppingBagIcon /> Cart
              </Button>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="link" className="flex gap-2 text-white">
                  <UserCircle2Icon /> Login
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>Configurations</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            {/* <NavigationMenuLink className="flex gap-2 text-white">
              <UserCircle2Icon /> Logout
            </NavigationMenuLink> */}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default Header;
