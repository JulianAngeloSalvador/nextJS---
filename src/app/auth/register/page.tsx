"use client";

import Link from "next/link";
import FormField from "../components/FormField";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [registerData, setRegisterData] = useState<AuthFields>({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(registerData);
  }, [registerData]);
  return (
    <section className="p-6 flex flex-col gap-y-4">
      <h4 className="font-semibold text-center">Register</h4>
      <form action="" className="flex flex-col gap-y-6">
        <FormField
          id="name"
          type="name"
          icon="bxs:user"
          name="name"
          value={registerData.name!}
          placeholder="Name"
          dataStateSetter={setRegisterData}
        />
        <FormField
          id="email"
          type="email"
          icon="tabler:mail-filled"
          name="email"
          value={registerData.email}
          placeholder="Email"
          dataStateSetter={setRegisterData}
        />
        <FormField
          id="password"
          type="password"
          name="password"
          icon="mingcute:lock-fill"
          value={registerData.password!}
          placeholder="Enter Password"
          dataStateSetter={setRegisterData}
        />
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
  );
}
