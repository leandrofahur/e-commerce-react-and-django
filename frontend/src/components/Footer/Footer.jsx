// third-party library
import { PuzzleIcon } from "lucide-react";

function Footer() {
  return (
    <footer className="flex justify-center gap-2 p-3 text-white max-w-full bg-teal-900">
      Leandro Machado &copy;
      <span className="flex gap-2">
        <PuzzleIcon />
        RDJ-Comm
      </span>
    </footer>
  );
}

export default Footer;
