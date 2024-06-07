import { montserrat } from "@/app/fonts/fonts";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <article className="flex flex-col gap-y-5 text-center w-fluid-500 mx-auto text-balance px-5 mt-8">
      <h2 className={`${montserrat.className}`}>ヤバイ！</h2>
      <p>We couldn't find the word you we're looking for 😥</p>
      <Link
        href={"/vocabularies"}
        className="bg-cta text-primary font-semibold self-center px-3 py-2 rounded-md"
      >
        Go Back
      </Link>
    </article>
  );
}
