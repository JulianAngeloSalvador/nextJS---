import Link from "next/link";
import Image from "next/image";
import { createClient } from "../supabaseConfig/server";
import MainNav from "./MainNav";

export default async function UserProfileTab() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userData = user?.user_metadata;
  const name = `${userData?.first_name} ${userData?.last_name}`;

  return (
    <MainNav>
      <div
        tabIndex={0}
        className="md:bg-tertiary/15 md:hover:bg-tertiary/25 flex gap-x-2 md:ml-auto w-full md:w-fit md:py-2 md:px-4 rounded-md flex-grow justify-center focus:md:outline outline-secondary/25 outline-2 cursor-pointer peer group children:select-none"
      >
        <div className="rounded-full overflow-clip w-10 aspect-square bg-black">
          <Image
            src={"/testImg.png"}
            alt={`${name} Profile Icon`}
            width={50}
            height={50}
            className="block w-full h-full object-cover"
            placeholder="blur"
            blurDataURL="/testImg.png"
          />
        </div>
        <p className="hidden md:block self-center font-semibold text-sm">
          {name}
        </p>
        <div className="hidden md:block arrow-down self-center relative -translate-y-0.5 group-focus:border-t-secondary/55" />
      </div>
      <ul className="opacity-0 pointer-events-none z-10 focus-within:opacity-100 focus-within:pointer-events-auto peer-focus-within:opacity-100 peer-focus-within:pointer-events-auto peer-focus:opacity-100 peer-focus:pointer-events-auto bg-tertiary/25 absolute bottom-full md:bottom-0 md:translate-y-full right-0 w-fluid-200 md:w-[min(225px,100%)] flex flex-col gap-y-2 p-2 rounded-tl-md md:rounded-tl-none md:rounded-bl-md  grandchildren:rounded-md grandchildren:text-sm grandchildren:w-full">
        <li>
          <Link
            href={"/dashboard/profile"}
            className="py-1 px-3 inline-block hover:bg-secondary hover:text-primary"
          >
            Profile
          </Link>
        </li>
        <li>
          <form action={"/auth/signout"} method="POST">
            <button
              type="submit"
              className="text-left w-full hover:bg-secondary hover:text-primary py-1 px-3 rounded-md"
              tabIndex={0}
            >
              <span>Log Out</span>
              {/* <span className="inline-block md:hidden text-icon w-full text-center text-tertiary">
                  <Icon icon="majesticons:logout-line" />
                </span> */}
            </button>
          </form>
        </li>
      </ul>
    </MainNav>
  );
}
