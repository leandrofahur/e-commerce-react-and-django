// Shadcn components
import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  // NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";

// third-party libraries
import { PuzzleIcon } from "lucide-react";

function Header() {
  return (
    <header className="flex justify-between items-center p-3 max-w-full bg-teal-900">
      <h1 className="flex text-xxl gap-3 font-bold text-white ">
        <PuzzleIcon />
        RDJ-Comm
      </h1>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="">About</NavigationMenuTrigger>
            {/* <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent> */}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
}

export default Header;
