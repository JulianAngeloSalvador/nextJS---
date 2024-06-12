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
        おかえり
      </h1>
      <section className="p-6 flex flex-col gap-y-4">
        <h4 className="font-semibold text-center">LOGIN</h4>

        <Form authLogin>
          {searchParams.message && (
            <small className="text-red-600 font-semibold text-center">
              {searchParams.message}
            </small>
          )}
        </Form>
        <small className="text-sm text-center mt-4 flex justify-center items-center gap-x-2">
          Not registered yet?{" "}
          <Link
            href={"/auth/register"}
            className="font-semibold hover:text-cta transition-colors duration-fast ease-in-out"
          >
            Sign Up
          </Link>
        </small>
      </section>
    </>
  );
}
