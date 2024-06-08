"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify-icon/react";
import { nanumMyeongjo } from "../fonts/fonts";
import Image from "next/image";

const paths = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: "ic:round-dashboard",
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
    <nav className="w-full md:w-fluid-layout mx-0 md:mx-auto fixed md:relative bottom-0 md:p-4 after:absolute after:h-0.5 after:bg-tertiary after:w-full after:left-0 after:top-0 md:after:hidden after:rounded-full flex justify-center md:justify-start bg-primary">
      <ul className="flex md:gap-x-8 flex-grow md:flex-grow-0 items-center">
        <li className="flex-grow">
          <Link
            href={"/"}
            className={`flex text-center font-poppins font-semibold hover:text-cta xl:hover:text-secondary transition-colors duration-fast ease-in-out py-3 px-2 md:pb-0 `}
          >
            <span className={` hidden md:inline-block font-bold text-caption`}>
              <span className="text-red-700">Japan</span>
              <span>Ease</span>
            </span>
            <span
              className={`inline-block md:hidden text-icon w-full text-center ${
                pathname === "/" ? "text-cta hover:!text-cta" : "text-tertiary"
              }`}
            >
              <Icon icon="tabler:home" />
            </span>
          </Link>
        </li>
        {paths.map((link) => (
          <li key={link.title} className="flex-grow">
            <Link
              href={link.path}
              className={`flex text-center font-poppins font-semibold hover:text-cta xl:hover:text-secondary transition-colors duration-fast ease-in-out py-3 px-2 md:pb-0 ${
                pathname === link.path
                  ? "text-cta hover:!text-cta"
                  : "text-tertiary"
              }`}
            >
              <span className="hidden md:inline-block">{link.title}</span>
              <span className="inline-block md:hidden text-icon w-full text-center">
                <Icon icon={link.icon} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
