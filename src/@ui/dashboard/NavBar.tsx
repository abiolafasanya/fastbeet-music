import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";
import { LuHome, LuInfo, LuShoppingCart } from "react-icons/lu";

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center border-b shadow-sm p-5">
      <div>
        <Input
          type="search"
          className="w-[250px]"
          placeholder="What would you like to learn?"
        />
      </div>
      <menu className="flex gap-10">
        {data.menus.map((menu) => (
          <Link
            key={menu.id}
            href={menu.url}
            className="flex gap-2 items-center text-base text-gray-500"
          >
            <menu.icon />
            <span>{menu.name}</span>
          </Link>
        ))}

        <button>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn" />
            <AvatarFallback className="bg-primary-500 text-primary-50">
              CN
            </AvatarFallback>
          </Avatar>
        </button>
      </menu>
    </nav>
  );
}

const data = {
  menus: [
    { id: 1, name: "Dashboard", icon: LuHome, url: "/dasboard/#" },
    { id: 2, name: "Cart", icon: LuShoppingCart, url: "/dasboard/#" },
    { id: 3, name: "FAQs", icon: LuInfo, url: "/dasboard/#" },
  ],
};
