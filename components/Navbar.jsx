"use client";

import {
  MagnifyingGlassIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navsContent = [
  "Home",
  "About",
  "Tours",
  "Destination",
  "Blog",
  "Pages",
  "Contact",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="flex flex-col items-center gap-2 px-4 py-2 font-medium text-gray-500 bg-gray-100 md:gap-0 md:justify-between md:flex-row md:px-16">
        <div className="flex items-center gap-2 divide-gray-400 md:divide-x">
          <h5>(000)999-898-999</h5>
          <p className="pl-2">info@trisog.com</p>
        </div>
        <div className="flex items-center gap-2">
          <Image
            src="/facebook.png"
            alt=""
            width={20}
            height={20}
            className="opacity-70"
          />
          <Image
            src="/twitter.png"
            alt=""
            width={20}
            height={20}
            className="opacity-70"
          />
          <Image
            src="/linkedin.png"
            alt=""
            width={20}
            height={20}
            className="opacity-70"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between px-4 py-3 md:px-16">
          <div className="flex flex-col justify-center md:flex-row md:items-center">
            <Link href={"/"} className="flex items-center gap-1">
              <Image
                src={"/logo.svg"}
                alt="logo"
                className=""
                width={50}
                height={50}
              ></Image>
              <h1 className="text-4xl italic font-bold">Trisog</h1>
            </Link>
            <div className="flex-col hidden gap-4 md:flex md:pl-16 md:flex-row md:items-center">
              {navsContent.map((content) => (
                <h3
                  key={content}
                  className="text-2xl font-medium text-gray-500 cursor-pointer hover:text-orange-600"
                >
                  {content}
                </h3>
              ))}
            </div>
          </div>
          <div className="items-center hidden gap-2 md:flex">
            <MagnifyingGlassIcon className="font-extrabold w-7 h-7" />
            <UserIcon className="font-extrabold w-7 h-7" />
            <h2 className="text-xl font-medium">
              Login / <span>Sign Up</span>
            </h2>
          </div>
          <div className="cursor-pointer md:hidden">
            {isOpen ? (
              <XMarkIcon className="w-5 h-5" onClick={() => setIsOpen(false)} />
            ) : (
              <Bars3Icon className="w-5 h-5" onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>
      </div>
      <div className="w-full border rounded">
        {isOpen ? (
          <div className="flex-col gap-6 p-2 lg:flex md:pl-16 md:flex-row md:items-center">
            {navsContent.map((content) => (
              <h3
                key={content}
                className="text-2xl font-medium text-gray-500 cursor-pointer hover:text-orange-600"
              >
                {content}
              </h3>
            ))}
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
