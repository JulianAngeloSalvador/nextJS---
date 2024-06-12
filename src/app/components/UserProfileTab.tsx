import Link from "next/link";
import Image from "next/image";
import { createClient } from "../supabaseConfig/server";
import MainNav from "./MainNav";
import { capitalizeFirst } from "../utils";

export default async function UserProfileTab() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userData = user?.user_metadata;
  const name = `${capitalizeFirst(userData!.first_name)} ${capitalizeFirst(
    userData!.last_name
  )}`;

  return (
    <MainNav>
      <Link
        href={"/dashboard/profile"}
        className="md:bg-tertiary/15 md:hover:bg-tertiary/25 flex gap-x-2 md:ml-auto w-full md:w-fit md:py-2 md:px-4 rounded-md flex-grow justify-center"
      >
        <div className="rounded-full overflow-clip w-10 aspect-square bg-black">
          <Image
            src={"/testImg.png"}
            alt={`${name} Profile Icon`}
            width={200}
            height={200}
            className="block w-full h-full object-cover"
            placeholder="blur"
            blurDataURL="/testImg.png"
          />
        </div>
        <p className="hidden md:block self-center font-semibold text-sm">
          {name}
        </p>
      </Link>
    </MainNav>
  );
}
