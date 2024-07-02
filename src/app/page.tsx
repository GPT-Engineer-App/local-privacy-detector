"use client";

import React from "react";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-4">Welcome to NSFW Detector</h1>
      <p className="text-lg text-center">
        This application helps you detect NSFW content in your Google Photos library locally.
      </p>
    </main>
  );
};

export default Home;