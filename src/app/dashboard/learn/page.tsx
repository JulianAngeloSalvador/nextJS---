import { createClient } from "@/app/supabaseConfig/server";
import { redirect } from "next/navigation";
import React from "react";

export default async function page() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <section className="dashboard-route">
      <p>Learn Japanese</p>
    </section>
  );
}
