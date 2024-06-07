const getList = async () => {
  const res = await fetch("http://localhost:4000/vocabularies");

  return res.json();
};

export default async function VocabList() {
  const vocabularies: Vocabularies[] = await getList();

  return (
    <>
      {vocabularies.map((vocab) => (
        <li
          key={vocab.id}
          className="outline outline-2 outline-red-500 w-[min(150px,100%)] sm:w-[min(200px,100%)] flex flex-col items-center flex-grow sm:flex-initial aspect-square"
        >
          <h1 className="flex-1 grid place-content-center text-nowrap">
            {vocab.kanji ? vocab.kanji : vocab.hiragana}
          </h1>
          <h3>{vocab.title}</h3>
        </li>
      ))}
    </>
  );
}
