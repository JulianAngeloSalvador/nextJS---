"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const paths = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Vocabularies",
    path: "/vocabularies",
  },
  {
    title: "Learn",
    path: "/learn",
  },
];
export default function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="w-full mx-auto mt-8 relative after:absolute after:h-0.5 after:bg-tertiary after:w-full after:left-0 after:bottom-0 p-4 after:rounded-full">
      <ul className="flex gap-x-8 items-center">
        {paths.map((link) => (
          <li key={link.title}>
            <Link
              href={link.path}
              className={`font-poppins font-semibold hover:text-secondary px-3 py-1 transition-colors duration-fast ease-in-out ${
                pathname === link.path ? "text-cta" : "text-tertiary"
              }`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
