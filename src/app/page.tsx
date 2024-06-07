import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-dvh w-fluid-1500 mx-auto relative">
      <article className="text-balance p-4 sm:p-8 absolute bottom-0 -translate-y-20 left-0 sm:left-8 leading-[1.15]">
        <h2 className="font-bold text-caption sm:text-subheadline">
          Beyond Sushi & Anime
        </h2>
        <h3 className="text-secondary/75 text-title sm:text-caption">
          Learn the Basic of Japanese
        </h3>
        <Link
          href={"/auth/login"}
          className="inline-block bg-cta py-2 px-6 rounded-md mt-5 font-semibold text-title"
        >
          Let's Go!
        </Link>
      </article>
    </section>
  );
}
