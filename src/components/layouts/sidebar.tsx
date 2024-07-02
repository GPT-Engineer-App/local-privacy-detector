"use client";

import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white fixed">
      <div className="p-4">
        <h2 className="text-2xl font-bold">NSFW Detector</h2>
      </div>
      <nav className="mt-4">
        <ul>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/google-photos">Google Photos</Link>
          </li>
          <li className="p-4 hover:bg-gray-700">
            <Link href="/results">Detection Results</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;