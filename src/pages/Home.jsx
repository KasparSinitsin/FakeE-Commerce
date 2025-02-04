import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../style.css";

function Home() {
  return (
    <>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
        <p className="mt-2 text-gray-600">This is your home page content.</p>
      </div>
    </>
  );
}

export default Home