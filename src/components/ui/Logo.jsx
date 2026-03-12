import Image from "next/image";
import Link from "next/link";

function Logo({ ...props }) {
  return (
    <Link href="/">
      <Image
        src="/images/logo.png"
        alt="Logo de La Roma"
        width={500} // base: 2000px
        height={150} // base: 600px
        sizes="(max-width: 768px) 50vw, 200px"
        {...props}
      />
    </Link>
  );
}

export default Logo;
