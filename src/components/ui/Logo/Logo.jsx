import Image from "next/image";
import Link from "next/link";

import styles from "./logo.module.scss";

function Logo() {
  return (
    <Link href="/" className={styles.logo__link}>
      <Image
        src="/images/logo.png"
        alt="Logo de La Roma"
        width={133}
        height={40}
        className={styles.logo__image}
      />
    </Link>
  );
}

export default Logo;
