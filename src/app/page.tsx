import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full relative after:absolute after:top-0 after:right-0 after:w-3/5 after:md:w-1/4 after:aspect-square after:bg-red-500 after:rounded-bl-full">
      <section className="min-h-dvh w-fluid-1500 mx-auto relative flex items-center">
        <article className="text-balance p-4 md:p-10 leading-[1.15] z-10">
          <h2 className="font-bold text-caption sm:text-subheadline 2xl:text-headline">
            Beyond Sushi & Anime
          </h2>
          <h3 className="text-secondary/75 text-title sm:text-caption 2xl:text-subheadline">
            Learn the Basic of Japanese
          </h3>
          <Link
            href={"/auth/login"}
            className="inline-block bg-secondary text-primary ring-4 ring-secondary ring-offset-1 py-3 px-16 rounded-full mt-8 font-semibold text-title 2xl:text-caption scale-[.9] hover:scale-100 active:scale-[.85] transition-all duration-fast hover:shadow-custom-shadow select-none"
          >
            Let's Go!
          </Link>
        </article>
      </section>
    </main>
  );
}
