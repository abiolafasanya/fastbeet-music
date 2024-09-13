import React from "react";
import Menu from "./menu";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="w-full bg-white fixed z-10 top-0">
      <div className="max-w-6xl inset-0 mx-auto sm:px-5 md:px-0 py-4">
        <section className="flex items-center justify-between px-5 md:px-0">
          <Link href={"/"} className="flex items-center gap-3">
            <Image width={40} height={40} src={"/fbt.png"} alt="logo" />
            <h2 className="font-semibold text-2xl">FASTBEET MUSIC</h2>
          </Link>
          <Menu />
        </section>
          
      </div>
    </header>
  );
}
