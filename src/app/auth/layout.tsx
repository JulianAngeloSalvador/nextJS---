export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="w-full h-dvh bg-primary flex flex-col justify-center items-center">
      <main className=" w-fluid-400 z-10">{children}</main>
    </section>
  );
}
