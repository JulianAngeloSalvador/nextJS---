import React from "react";
import { createClient } from "../supabaseConfig/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <section className="dashboard-route">
      <h4 className="font-semibold flex gap-x-2">
        <span>Konnichiwa,</span>
        <span className="text-red-700">{user.id}</span>
      </h4>
    </section>
  );
}
