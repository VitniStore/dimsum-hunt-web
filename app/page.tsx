// app/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const visited = sessionStorage.getItem("visited");

    if (visited) {
      // Kalau sudah pernah buka, langsung ke /home
      router.replace("/home");
    } else {
      // Kalau pertama kali buka, arahkan ke /landing
      sessionStorage.setItem("visited", "true");
      router.replace("/landing");
    }
  }, [router]);

  return null;
}
