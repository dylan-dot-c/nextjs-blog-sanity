"use client";

import Link from "next/link";
import React from "react";
import ThemeButton from "./ThemeButton";

function Navbar() {
  return (
    <div className="max-w-3xl mx-auto px-6 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16">
        <div className="flex justify-between items-center w-full">
          <Link href={"/"}>
            <h1 className="text-2xl font-medium">
              Dylan <span className="text-green-400">Blogs</span>
            </h1>
          </Link>
        </div>
        <ThemeButton />
      </div>
    </div>
  );
}

export default Navbar;
