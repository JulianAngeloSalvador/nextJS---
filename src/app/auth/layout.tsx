export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="w-full h-dvh bg-primary grid place-content-center">
      {children}
    </section>
  );
}
