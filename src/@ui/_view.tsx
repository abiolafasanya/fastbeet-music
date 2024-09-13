import React from "react";
import Header from "./header";

export default function View({children}: {children: React.ReactNode}) {
  return (
    <main className="w-full h-full max-w-[1920px] mx-auto bg-primary-50 relative">
      <Header />
      {children}
    </main>
  );
}
