import Link from 'next/link';
import React from 'react'
import {  LuHeadphones, LuHome, LuInfo, LuMessageSquare, LuPartyPopper, LuSchool2, LuScrollText, LuUsers2, LuYoutube } from 'react-icons/lu';

export default function SidebarMenu() {
  return (
    <div className="h-full mt-5 flex flex-col justify-between">
      <menu id="top-menu" className="h-[80%] flex flex-col gap-4">
        {data.menus.map((menu) => (
          <Link
            id={menu.id.toString()}
            href={menu.url}
            className="flex gap-2 items-center text-base"
          >
            <menu.icon />
            <span>{menu.name}</span>
          </Link>
        ))}
      </menu>

      <menu id="bottom-menu" className="h-[20%] flex flex-col gap-4 ">
        {data.buttonMenu.map((menu) => (
          <Link
            id={menu.id.toString()}
            href={menu.url}
            className="flex gap-2 items-center text-base"
          >
            <menu.icon />
            <span>{menu.name}</span>
          </Link>
        ))}

       
      </menu>
    </div>
  );
}

const data = {
  menus: [
    { id: 1, name: "Dashboard", icon: LuHome, url: "/dasboard/#" },
    { id: 2, name: "Lessons", icon: LuScrollText, url: "/dasboard/#" },
    { id: 3, name: "Messages", icon: LuMessageSquare, url: "/dasboard/#" },
    { id: 4, name: "Teachers", icon: LuUsers2, url: "/dasboard/#" },
    { id: 5, name: "Classes", icon: LuSchool2, url: "/dasboard/#" },
    { id: 6, name: "Media", icon: LuYoutube, url: "/dasboard/#" },
    { id: 7, name: "FAQ", icon: LuInfo, url: "/dasboard/#" },
  ],

  buttonMenu: [
    { id: 1, name: "Beta", icon: LuPartyPopper, url: "/dasboard/#" },
    { id: 2, name: "Quick Contact", icon: LuHeadphones, url: "/dasboard/#" },
  ],
};
