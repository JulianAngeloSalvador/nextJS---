import Link from "next/link";
import { nanumMyeongjo } from "@/app/fonts/fonts";
import { createClient } from "@/app/supabaseConfig/server";
import { redirect } from "next/navigation";
import Form from "../components/Form";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <>
      <h1 className={`${nanumMyeongjo.className} text-center text-nowrap`}>
        ようこそ
      </h1>
      <section className="p-6 flex flex-col gap-y-4">
        <h4 className="font-semibold text-center">Register</h4>
        <Form authLogin={false}>
          {searchParams.message && (
            <small className="text-red-600 font-semibold text-center">
              {searchParams.message}
            </small>
          )}
        </Form>
        <small className="text-sm text-center mt-4 flex justify-center items-center gap-x-2">
          Already a member?{" "}
          <Link
            href={"/auth/login"}
            className="font-semibold hover:text-cta transition-colors duration-fast ease-in-out"
          >
            Sign In
          </Link>
        </small>
      </section>
    </>
  );
}
