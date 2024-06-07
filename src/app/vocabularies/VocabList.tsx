import Link from "next/link";

const getList = async () => {
  const res = await fetch(`${process.env.API_URL}/vocabularies`, {
    next: {
      revalidate: 0, // 0 value always fetch fresh data; bypass cached data. Value is in seconds
    },
  });

  return res.json();
};

export default async function VocabList() {
  const vocabularies: Vocabularies[] = await getList();

  return (
    <>
      {vocabularies.map((vocab) => (
        <li
          key={vocab.id}
          className="outline outline-2 outline-tertiary w-fluid-150 sm:w-fluid-200 flex-grow children:text-center sm:flex-initial aspect-square rounded-md max-w-60"
        >
          <Link
            href={`vocabularies/${vocab.id}`}
            className="bg-tertiary/5 hover:bg-tertiary/10 w-full h-full p-4 flex flex-col"
          >
            <h1 className="flex-grow grid place-content-center text-nowrap sm:text-subheadline">
              {vocab.kanji ? vocab.kanji : vocab.hiragana}
            </h1>
            <h3>{vocab.title}</h3>
          </Link>
        </li>
      ))}
    </>
  );
}
