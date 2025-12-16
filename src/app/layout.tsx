"use client";
import { useState } from "react";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import { BookOpen, Dices, Circle, ImageIcon, Menu, X } from "lucide-react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    {
      href: "/slider",
      label: "ข้อ 1 Recipe Slider",
      icon: ImageIcon,
      color: "bg-orange-500",
    },
    {
      href: "/books",
      label: "ข้อ 6 Books System",
      icon: BookOpen,
      color: "bg-blue-500",
    },
    {
      href: "/venn",
      label: "ข้อ 9 Venn Diagram",
      icon: Circle,
      color: "bg-green-500",
    },
    {
      href: "/dice",
      label: "ข้อ 12 Dice Probability",
      icon: Dices,
      color: "bg-purple-500",
    },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Floating Navigation */}
      <nav
        className={`fixed bottom-6 left-1/2 z-40 -translate-x-1/2 transition-all duration-300 ${
          isOpen
            ? "scale-100 opacity-100"
            : "scale-95 opacity-0 lg:scale-100 lg:opacity-100"
        }`}
      >
        <div className="flex gap-3 rounded-full bg-white/90 p-3 shadow-2xl backdrop-blur-lg ring-1 ring-black/5">
          {pages.map((page) => {
            const Icon = page.icon;
            return (
              <Link
                key={page.href}
                href={page.href}
                onClick={() => setIsOpen(false)}
                className="group relative flex flex-col items-center gap-2 rounded-xl px-4 py-3 transition-all hover:bg-gray-50"
              >
                <div
                  className={`${page.color} flex h-10 w-10 items-center justify-center rounded-lg text-white shadow-md transition-transform group-hover:scale-110`}
                >
                  <Icon size={20} />
                </div>
                <span className="text-xs font-medium text-gray-700 transition-colors group-hover:text-gray-900">
                  {page.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm lg:hidden"
        />
      )}
    </>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingNav />
      </body>
    </html>
  );
}
