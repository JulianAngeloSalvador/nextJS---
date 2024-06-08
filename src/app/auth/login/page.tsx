"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import FormField from "../components/FormField";

export default function LoginPage() {
  const [loginData, setLoginData] = useState<LoginData>({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(loginData);
  }, [loginData]);

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
