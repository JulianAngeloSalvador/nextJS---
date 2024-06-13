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
      <header className="flex justify-between items-center">
        <h5 className="font-semibold flex gap-x-2">
          <span>Konnichiwa,</span>
          <span className="text-red-700">{`${user.user_metadata.last_name}-San`}</span>
        </h5>
      </header>
    </section>
  );
}
