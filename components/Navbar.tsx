"use client";
import React, { useState } from "react";
import Link from "next/link";
import ArameansInMedicinePngLogo from "@/assets/ArameansInMedicine";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-xl font-bold text-cyan-700">AIM</div>
        <ArameansInMedicinePngLogo />

        {/* Hamburger Icon / X Icon */}
        <button
          className="block lg:hidden text-cyan-700 z-10"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {/* Links */}
        <nav
          className={`${
            isOpen
              ? "fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center"
              : "hidden"
          } lg:flex lg:items-center lg:static lg:bg-transparent lg:flex-row`}
        >
          <ul
            className={`${
              isOpen
                ? "flex flex-col items-center space-y-6 text-white text-2xl"
                : "hidden"
            } lg:flex lg:flex-row lg:space-y-0 lg:space-x-6 lg:text-gray-700 lg:text-base`}
          >
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link href="/membership" onClick={() => setIsOpen(false)}>
                Membership
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
