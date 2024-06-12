import { createClient } from "@/app/supabaseConfig/server";
import Dialog from "./components/Dialog";
import Image from "next/image";
import { capitalizeFirst } from "@/app/utils";

export default async function ProfilePage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  const userData = user?.user_metadata;
  const name = `${capitalizeFirst(userData!.first_name)} ${capitalizeFirst(
    userData!.last_name
  )}`;

  return !user ? (
    <div>
      <h2>Cannot display content</h2>
    </div>
  ) : (
    <main>
      {/* <Dialog user={user} /> */}
      <section>
        <figure className="flex flex-col gap-y-2">
          <div className="w-24 aspect-square rounded-md overflow-clip">
            <Image
              src={"/testImg.png"}
              alt={`${name}'s Display Picture`}
              width={100}
              height={100}
              className="w-full h-full aspect-square object-cover"
              placeholder="blur"
              blurDataURL="/testImg.png"
            />
          </div>
          <figcaption className=" leading-[1.25]">
            <h4 className="font-semibold">{name}</h4>
            <p>{user.email}</p>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
