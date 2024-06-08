"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import FormField from "../components/FormField";
import { login } from "../actions";
import { useSearchParams } from "next/navigation";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  return (
    <section className="p-6 flex flex-col gap-y-4">
      <h4 className="font-semibold text-center">LOGIN</h4>
      <form action="" className="flex flex-col gap-y-6">
        <FormField
          id="email"
          type="email"
          icon="tabler:mail-filled"
          name="email"
          value={loginData.email}
          placeholder="Email"
          dataStateSetter={setLoginData}
        />
        <FormField
          id="password"
          type="password"
          name="password"
          icon="mingcute:lock-fill"
          value={loginData.password!}
          placeholder="Enter Password"
          dataStateSetter={setLoginData}
        />
        {searchParams.message && (
          <small className="text-red-600 font-semibold text-center">
            {searchParams.message}
          </small>
        )}
        <button
          formAction={login}
          className="bg-secondary self-center text-primary px-10 py-2 rounded-full font-semibold"
        >
          Log In
        </button>
      </form>
      <small className="text-sm text-center mt-4 flex justify-center items-center gap-x-2">
        Not registered yet?{" "}
        <Link
          href={"/auth/register"}
          className="font-semibold hover:text-cta transition-colors duration-fast ease-in-out"
        >
          Sign Up
        </Link>
      </small>
    </section>
  );
}
