// "use client";

import Link from "next/link";
import FormField from "../components/FormField";
// import { useState } from "react";
import { signup } from "../actions";
import { nanumMyeongjo } from "@/app/fonts/fonts";
import { createClient } from "@/app/supabaseConfig/server";
import { redirect } from "next/navigation";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  // const [registerData, setRegisterData] = useState<AuthFields>({
  //   name: "",
  //   email: "",
  //   password: "",
  // });

  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <>
      <h1 className={`${nanumMyeongjo.className} text-center text-nowrap`}>
        ようこそ
      </h1>
      <section className="p-6 flex flex-col gap-y-4">
        <h4 className="font-semibold text-center">Register</h4>
        <form action="" className="flex flex-col gap-y-6">
          <FormField
            id="name"
            type="name"
            icon="bxs:user"
            name="name"
            // value={registerData.name!}
            placeholder="Name"
            // dataStateSetter={setRegisterData}
          />
          <FormField
            id="email"
            type="email"
            icon="tabler:mail-filled"
            name="email"
            // value={registerData.email}
            placeholder="Email"
            // dataStateSetter={setRegisterData}
          />
          <FormField
            id="password"
            type="password"
            name="password"
            icon="mingcute:lock-fill"
            // value={registerData.password!}
            placeholder="Enter Password"
            // dataStateSetter={setRegisterData}
          />
          {searchParams.message && (
            <small className="text-red-600 font-semibold text-center">
              {searchParams.message}
            </small>
          )}
          <button
            formAction={signup}
            className="bg-secondary self-center text-primary px-10 py-2 rounded-full font-semibold"
          >
            Register
          </button>
        </form>
        <small className="text-sm text-center mt-4 flex justify-center items-center gap-x-2">
          Already a member?{" "}
          <Link
            href={"/auth/login"}
            className="font-semibold hover:text-cta transition-colors duration-fast ease-in-out"
          >
            Sign In
          </Link>
        </small>
      </section>
    </>
  );
}
