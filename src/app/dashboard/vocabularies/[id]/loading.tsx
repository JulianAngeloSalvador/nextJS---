import React from "react";

export default function Loading() {
  return (
    <section className="w-full children:animate-pulse children:rounded-md flex flex-col gap-y-4 py-4">
      <header className="bg-tertiary/15 w-fluid-200 h-16" />
      <main className="flex flex-col gap-y-2 bg-transparent w-fluid-600 children:h-8 children:rounded-md children:bg-tertiary/15">
        <div className="w-full" />
        <div className="w-3/4" />
        <div className="w-1/2" />
      </main>
    </section>
  );
}
