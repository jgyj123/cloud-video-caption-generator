import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/ui/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow bg-gray-50 dark:bg-zinc-900 flex items-center justify-center px-6">
        <div className="max-w-3xl text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 dark:text-white">
            AI-Powered Video Captioning in the Cloud
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Upload videos, generate subtitles using AWS Transcribe and FFmpeg,
            and stream globally — all on a secure, serverless architecture.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/upload">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/architecture">View Architecture</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
