"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify-icon/react";

const paths = [
  {
    title: "Home",
    path: "/",
    icon: "tabler:home",
  },
  {
    title: "Vocabularies",
    path: "/dashboard/vocabularies",
    icon: "streamline:dictionary-language-book",
  },
  {
    title: "Learn",
    path: "/dashboard/learn",
    icon: "tabler:book-2",
  },
];
export default function MainNav() {
  const pathname = usePathname();
  return (
    <nav className="w-full mt-8 fixed sm:relative bottom-0 sm:p-4 after:absolute after:h-0.5 after:bg-tertiary after:w-full after:left-0 after:top-0 sm:after:top-full after:rounded-full flex justify-center md:justify-start">
      <ul className="flex sm:gap-x-8 flex-grow sm:flex-grow-0">
        {paths.map((link) => (
          <li key={link.title} className="flex-grow">
            <Link
              href={link.path}
              className={`flex text-center font-poppins font-semibold hover:text-cta xl:hover:text-secondary transition-colors duration-fast ease-in-out py-3 px-2 sm:pb-0 ${
                pathname === link.path
                  ? "text-cta hover:!text-cta"
                  : "text-tertiary"
              }`}
            >
              <span className="hidden sm:inline-block">{link.title}</span>
              <span className="inline-block sm:hidden text-icon w-full text-center">
                <Icon icon={link.icon} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
