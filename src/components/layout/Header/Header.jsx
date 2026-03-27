"use client";

import { Bars3Icon, PhoneArrowUpRightIcon } from "@heroicons/react/24/solid";

import { Logo } from "@/components/ui/Logo";

import styles from "./header.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <button>
        <Bars3Icon
          className={styles.menu_icon}
          onClick={() => alert("Vous ouvrez le menu de navigation !")} // todo : add show menu
        />
      </button>

      <Logo />

      <button>
        <PhoneArrowUpRightIcon
          className={styles.phone_icon}
          onClick={() => alert("Vous appelez La Roma !")} // todo : add call number
        />
      </button>
    </header>
  );
}

export default Header;
