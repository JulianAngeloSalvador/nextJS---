import Link from "next/link";

export default function LoginPage() {
  return (
    <section>
      <h1>LOGIN</h1>
      <div className="flex gap-x-4">
        <Link href={"/auth/register"}>Register</Link>
        <Link href={"/"}>Homepage</Link>
      </div>
    </section>
  );
}
