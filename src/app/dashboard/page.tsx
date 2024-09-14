import NavBar from "@/@ui/dashboard/NavBar";
import SidebarMenu from "@/@ui/dashboard/SidebarMenu";
import Link from "next/link";
import React from "react";

export default function Page() {
  return (
    <main className="w-full max-w-[1920px] h-screen overflow-hidden">
      <section className="w-full h-full flex">
        <aside className="h-full w-[20%] bg-primary-500 text-primary-50 p-5">
          <Link href={"/"}>
            <h2 className="text-2xl font-semibold my-2">Fastbeet Music</h2>
          </Link>
          <SidebarMenu />
        </aside>
        <article className="h-full w-[80%]">
          <NavBar />
        </article>
      </section>
    </main>
  );
}
