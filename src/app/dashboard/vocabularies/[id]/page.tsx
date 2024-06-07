import { capitalizeFirst } from "@/app/utils";
import { notFound } from "next/navigation";

export const dynamicParams = true;

// generateStaticParams statically generates routes at build time instead of on-demand req (Perf wise)
export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_URL}/vocabularies`).then((res) =>
    res.json()
  );

  return res.map((vocab: { id: string }) => ({
    id: vocab.id,
  }));
}

const getVocab = async (id: string) => {
  // await new Promise((resolve) => setTimeout(resolve, 5000)); // loader simulator
  const res = await fetch(`${process.env.API_URL}/vocabularies/${id}`);

  // handling non-existen params using NextJS' not found handler
  if (!res.ok) {
    notFound();
  }

  return res.json();
};

export default async function page({ params }: { params: { id: string } }) {
  const entryData: Vocabularies = await getVocab(params.id);
  const { title, id, contentDescription } = entryData;

  return (
    <section>
      <article key={id}>
        <h2>{title}</h2>
        <p className="text-tertiary">{capitalizeFirst(contentDescription)}</p>
      </article>
    </section>
  );
}
