"use client";
import { useLogin } from "@/app/hooks/form/login";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import { LuMenu } from "react-icons/lu";

const menuData = [
  { id: 1, name: "Home", url: "/#home" },
  { id: 2, name: "Service", url: "/#services" },
  { id: 3, name: "Program", url: "/#program" },
  { id: 4, name: "About", url: "/#about" },
  { id: 5, name: "Contact", url: "/#contact" },
];

export default function Menu() {
  const { toggleOpenLoginModal } = useLogin();
  return (
    <div>
      <menu className="hidden md:flex items-center space-x-4">
        <Fragment>
          {menuData.map((menu, i) => (
            <li key={i}>
              <Link
                href={menu.url}
                className="text-primary-500 hover:text-primary-400 font-medium"
              >
                {menu.name}
              </Link>
            </li>
          ))}
          <Button
            className="bg-primary-500 hover:bg-primary-500/90"
            onClick={toggleOpenLoginModal}
          >
            Log In
          </Button>
        </Fragment>
      </menu>
      <MobileMenu />
    </div>
  );
}

function MobileMenu() {
  const { toggleOpenLoginModal } = useLogin();
  const [open, setOpen] = useState(false);
  function toggle() {
    return setOpen((open) => !open);
  }
  return (
    <div className="relative">
      <button className="flex md:hidden" onClick={toggle}>
        <LuMenu size={24} className="text-primary-900" />
      </button>
      {open && (
        <menu className="absolute w-60 top-10 shadow-sm rounded-sm bg-white right-0 flex flex-col md:hidden">
          <Fragment>
            {menuData.map((menu, i) => (
              <li key={i} className="w-full">
                <Link
                  href={menu.url}
                  className="flex text-primary-500 hover:bg-primary-50 w-full hover:text-primary-400 font-medium p-3 ease-in-out transition-all"
                >
                  {menu.name}
                </Link>
              </li>
            ))}
            <Button
              className="my-3 mx-3 bg-primary-500 hover:bg-primary-500/90"
              onClick={toggleOpenLoginModal}
            >
              Log In
            </Button>
          </Fragment>
        </menu>
      )}
    </div>
  );
}
