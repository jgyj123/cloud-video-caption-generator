"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-semibold text-gray-800 dark:text-white"
        >
          🎬 Video Captioning
        </Link>
        <div className="space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/upload">Upload</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/architecture">Architecture</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
