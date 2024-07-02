"use client";

import React from "react";
import Link from "next/link";

const Sidebar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex">
      <aside className="w-64 h-screen bg-gray-800 text-white flex flex-col">
        <div className="p-4 flex items-center">
          <img src="/icon.png" alt="App Icon" className="w-8 h-8 mr-2" />
          <span className="text-xl font-bold">NSFW Detector</span>
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-2">
              <Link href="/">
                <a className="text-white">Home</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/google-photos">
                <a className="text-white">Google Photos</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/results">
                <a className="text-white">Detection Results</a>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4 bg-gray-100">{children}</main>
    </div>
  );
};

export default Sidebar;