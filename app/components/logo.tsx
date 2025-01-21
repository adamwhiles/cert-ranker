import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src="/logo.svg"
        alt="CertRanker"
        width={900}
        height={180}
        priority={true}
        className="logo"
      />
    </Link>
  );
}
