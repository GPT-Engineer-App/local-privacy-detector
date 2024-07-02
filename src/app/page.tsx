"use client";

import React from "react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to NSFW Detector</h1>
      <p className="text-lg text-center">
        This application helps you detect NSFW content in your Google Photos library locally, ensuring your privacy.
      </p>
    </div>
  );
}