"use client";

import { useState } from "react";
import Link from "next/link";
import { House, Mail, Menu, Pizza, X } from "lucide-react";

import { Button } from "../ui";

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

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
        className={`absolute top-0 left-0 h-screen w-screen bg-black/30 ${isOpen ? "block" : "hidden"}`}
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
            <ul>
              <hr />

              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 rounded-xl py-4 pl-4"
                  onClick={handleClose}
                >
                  <House />
                  Accueil
                </Link>
              </li>

              <hr />

              <li>
                <Link
                  href="/menu"
                  className="flex items-center gap-2 rounded-xl py-4 pl-4"
                  onClick={handleClose}
                >
                  <Pizza />
                  Menu
                </Link>
              </li>

              <hr />

              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-xl py-4 pl-4"
                  onClick={handleClose}
                >
                  <Mail />
                  Contact
                </Link>
              </li>

              <hr />
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}

export default Nav;
