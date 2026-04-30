"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children, className = "" }) => {
  const pathname = usePathname();

  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`block w-full px-3 py-2 rounded-lg transition ${
        isActive
          ? "btn bg-[#f59e0b] text-[#081f30] hover:opacity-90"
          : "text-gray-500 hover:text-black"
      } ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
