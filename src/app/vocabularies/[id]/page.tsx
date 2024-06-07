import { capitalizeFirst } from "@/app/utils";

// generateStaticParams statically generates routes at build time instead of on-demand req (Perf wise)
export async function generateStaticParams() {
  const res = await fetch(`${process.env.API_URL}`).then((res) => res.json());

  return res.map((vocab: { id: string }) => ({
    id: vocab.id,
  }));
}

const getVocab = async (id: string) => {
  const res = await fetch(`${process.env.API_URL}/vocabularies/${id}`);

  return res.json();
};

export default async function page({ params }: { params: { id: string } }) {
  // handled non-existent params through try-catch block but can also use NextJS' dynamicParams
  try {
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
  } catch (error) {
    console.error("Error fetching vocabulary:", error);
    return <p>Vocabulary not found.</p>;
  }
}
