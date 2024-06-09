import React from "react";
import { nanumMyeongjo } from "./fonts/fonts";
import Link from "next/link";
import { createClient } from "./supabaseConfig/server";

export default async function NotFound() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <section className="fixed inset-0 bg-primary/85 backdrop-blur-sm grid place-content-center">
      <article className="flex flex-col gap-y-5 text-center w-fluid-600 mx-auto text-balance px-5">
        <h2 className={`${nanumMyeongjo.className}`}>ヤバイ！</h2>
        <p>We couldn't find the page you we're looking for 😥</p>
        <Link
          href={user ? "/dashboard" : "/"}
          className="bg-cta mt-4 text-primary font-semibold self-center px-3 py-2 rounded-md"
        >
          {user ? "Back to Dashboard " : "Back to Homepage "}
        </Link>
      </article>
    </section>
  );
}
