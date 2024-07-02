"use client";

import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 h-full shadow-md bg-white absolute">
      <div className="p-6">
        <h1 className="text-3xl font-semibold text-center text-blue-600">
          NSFW Detector
        </h1>
        <nav className="mt-10">
          <Link href="/">
            <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white">
              Home
            </a>
          </Link>
          <Link href="/google-photos">
            <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white">
              Google Photos
            </a>
          </Link>
          <Link href="/results">
            <a className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-600 hover:text-white">
              Detection Results
            </a>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;