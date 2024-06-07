import MainNav from "../components/MainNav";

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section>
      <MainNav />
      <main className="p-4">{children}</main>
    </section>
  );
}
