import { PhoneOutgoing } from "lucide-react";

import { Nav } from "../navigation";
import { Button, Logo } from "../ui";

function Header() {
  return (
    <header className="flex items-center justify-between px-[4.5vw] py-2 shadow-md">
      <Nav />

      <Logo className="h-auto w-[50vw] max-w-50" />

      <Button
        className="p-3 duration-300 hover:bg-stone-200 active:opacity-50"
        aria-label="Nous appeler"
      >
        <PhoneOutgoing />
      </Button>
    </header>
  );
}

export default Header;
