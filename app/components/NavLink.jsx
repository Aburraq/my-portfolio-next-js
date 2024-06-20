"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ link }) {
  const pathname = usePathname();

  return (
    <Link
      className={`rounded p-1 ${
        pathname === link.url && "bg-black text-white z-50"
      }`}
      href={link.url}
    >
      {link.title}
    </Link>
  );
}
