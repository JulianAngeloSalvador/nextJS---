"use client";

import { User, UserMetadata } from "@supabase/supabase-js";
import { useEffect } from "react";

export default function Dialog({ user }: { user: User }) {
  const userData = user.user_metadata as UserMetadata;

  const {} = userData;

  return (
    <dialog open className="w-fluid-500">
      <h4></h4>
    </dialog>
  );
}
