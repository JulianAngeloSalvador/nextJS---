import Link from "next/link";

export default function LoginPage() {
  return (
    <section>
      <h1>REGISTER</h1>
      <div className="flex gap-x-4">
        <Link href={"/auth/login"}>Login</Link>
        <Link href={"/"}>Homepage</Link>
      </div>
    </section>
  );
}
