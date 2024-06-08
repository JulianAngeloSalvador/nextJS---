import MainNav from "../components/MainNav";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="w-full h-full relative pb-24">
      <header className="relative after:absolute after:h-0.5 after:bg-secondary after:w-full after:left-0 after:bottom-0 after:rounded-full">
        <MainNav />
      </header>
      <div className="hidden md:block absolute w-fluid-layout mx-auto h-dvh inset-0 border-l-2 border-r-2 border-secondary pointer-events-none z-10" />
      <main className="p-4 w-fluid-layout mx-0 sm:mx-auto md:max-h-[90dvh] md:overflow-auto">
        {children}
      </main>
      <div className="h-dvh hidden md:block w-full bg-transparent overflow-hidden pointer-events-none absolute inset-0 after:absolute after:w-full after:bg-primary/55 after:backdrop-blur-sm after:h-full after:left-0 after:top-full after:-translate-y-14 after:border-t-2 after:border-secondary" />
    </section>
  );
}
