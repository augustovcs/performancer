// src/components/client-layout.tsx
"use client";

import { usePathname } from "next/navigation";
import NavBar from "@/components/nav-bar";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // se estiver no login ou na raiz, não mostra NavBar
  const noNavBar = ["/", "/login", "/signup"];
  const hideNavBar = noNavBar.includes(pathname.toLowerCase());

  return (
    <div className="flex">
      {!hideNavBar && <NavBar />}
      <main className={`flex-1 ${!hideNavBar ? "ml-24 p-6" : ""}`}>
        {children}
      </main>
    </div>
  );
}
