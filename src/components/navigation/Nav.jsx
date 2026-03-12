"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { useFetch } from "@/src/hooks";

import { Button } from "../ui";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const { data: navLinks, isLoading, error } = useFetch("/data/nav-links.json");

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAsideClick = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <Button onClick={handleOpen} aria-label="Ouvrir la navigation">
        <Menu />
      </Button>

      {/* Side Nav */}
      <div
        className={`absolute top-0 left-0 h-screen w-screen bg-black/50 ${isOpen ? "block" : "hidden"}`}
        onClick={handleClose}
      >
        <aside
          className="absolute top-0 left-0 z-10 h-screen w-1/2 bg-white"
          onClick={handleAsideClick}
        >
          <Button className="absolute top-0 right-0" onClick={handleClose}>
            <X />
          </Button>

          <nav className="mt-10">
            <ul className="flex flex-col gap-1">
              {isLoading && <p className="pl-4 text-gray-600">Chargement...</p>}

              {error && <p className="pl-4 text-red-600">{error}</p>}

              {navLinks?.map((navLink) => (
                <li key={navLink.id}>
                  <Link
                    href={navLink.href}
                    className="flex py-4 pl-4"
                    onClick={handleClose}
                  >
                    {navLink.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}

export default Nav;
