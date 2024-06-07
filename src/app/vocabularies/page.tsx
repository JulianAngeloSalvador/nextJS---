import React from "react";
import VocabList from "./VocabList";

export default function page() {
  return (
    <section className="flex flex-col gap-4">
      <h3>Vocabularies</h3>
      <ul className="flex gap-6 flex-wrap justify-center sm:justify-start">
        <VocabList />
      </ul>
    </section>
  );
}
