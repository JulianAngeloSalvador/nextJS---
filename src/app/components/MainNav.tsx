"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify-icon/react";
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
export default function MainNav({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname();

  return (
    <nav className="w-full md:w-fluid-layout mx-0 md:mx-auto fixed md:relative bottom-0 md:p-4 after:absolute after:h-0.5 after:bg-tertiary after:w-full after:left-0 after:top-0 md:after:hidden after:rounded-full flex justify-center items-center md:justify-start">
      <ul className="flex gap-x-2 md:gap-x-8 flex-grow md:flex-grow-0 items-center  w-full">
        <li className="flex-grow md:flex-grow-0">
          <Link
            href={"/"}
            className={`flex items-center gap-x-1 text-center font-poppins font-semibold hover:text-cta xl:hover:text-secondary transition-colors duration-fast ease-in-out py-3 px-2`}
          >
            <Image
              src="/raku.svg"
              alt="Site Logo"
              width={30}
              height={30}
              placeholder="blur"
              className="hidden md:block min-w-[40px] aspect-square"
              blurDataURL="/raku.svg"
            />
            <span className={` hidden md:inline-block font-bold text-title`}>
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
          <li key={link.title} className="flex-grow md:flex-grow-0">
            <Link
              href={link.path}
              className={`flex text-center font-poppins font-semibold hover:text-cta xl:hover:text-secondary transition-colors duration-fast ease-in-out py-3 px-2 ${
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
        <li className="flex-grow">
          {/* <form action={"/auth/signout"} method="POST">
            <button
              type="submit"
              className={`md:ml-auto w-full md:w-fit flex items-center gap-x-1 text-center font-poppins font-semibold md:bg-secondary text-primary transition-colors duration-fast ease-in-out py-3 px-2 md:py-2 md:px-6 md:ring-2 ring-offset-1 ring-secondary rounded-full text-sm text-nowrap md:scale-[.85] md:hover:scale-100 md:transition-all md:duration-fast md:ease-in-out md:hover:shadow-custom-shadow`}
            >
              <span className="hidden md:block">Log Out</span>
              <span className="inline-block md:hidden text-icon w-full text-center text-tertiary">
                <Icon icon="majesticons:logout-line" />
              </span>
            </button>
          </form> */}
          {children}
        </li>
      </ul>
    </nav>
  );
}
