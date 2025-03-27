"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Loader2, UploadCloud } from "lucide-react";
import Navbar from "@/components/ui/navbar";

export default function UploadPage() {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  useEffect(() => {
    if (videoFile) {
      const url = URL.createObjectURL(videoFile);
      setPreviewUrl(url);
      return () => URL.revokeObjectURL(url);
    } else {
      setPreviewUrl(null);
    }
  }, [videoFile]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("video/")) {
      setVideoFile(file);
      setStatus(null);
    } else {
      alert("Please upload a valid video file.");
    }
  };

  const handleUpload = async () => {
    if (!videoFile) return;
    setUploading(true);
    setStatus(null);

    const formData = new FormData();
    formData.append("file", videoFile);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }

    setUploading(false);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#f8f9fa] dark:bg-zinc-900 px-4 py-12 flex justify-center items-start">
        <div className="w-full max-w-3xl">
          <Card className="rounded-2xl shadow-md border border-gray-200 dark:border-zinc-700 bg-white dark:bg-zinc-950">
            <CardHeader className="text-center space-y-1 pt-8">
              <UploadCloud className="mx-auto h-10 w-10 text-gray-500 dark:text-gray-400" />
              <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
                AI Video Captioning
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Upload your video file to generate automatic subtitles.
              </p>
            </CardHeader>

            <CardContent className="px-8 py-6 space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="video"
                  className="text-gray-700 dark:text-gray-300"
                >
                  Select Video File
                </Label>

                <label
                  htmlFor="video"
                  className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-lg cursor-pointer border-gray-300 hover:border-gray-400 transition-colors bg-gray-50 dark:bg-zinc-900"
                >
                  <UploadCloud className="h-8 w-8 text-gray-500 mb-2" />
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Click or drag to upload a video
                  </p>
                  {videoFile && (
                    <p className="text-sm text-gray-800 dark:text-gray-300 font-medium mt-2">
                      {videoFile.name}
                    </p>
                  )}
                </label>

                <Input
                  id="video"
                  type="file"
                  accept="video/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              {previewUrl && (
                <div className="rounded-lg overflow-hidden border border-gray-200 dark:border-zinc-700 shadow-sm">
                  <video
                    src={previewUrl}
                    controls
                    className="w-full max-h-[400px] bg-black"
                  />
                </div>
              )}

              <Button
                onClick={handleUpload}
                disabled={!videoFile || uploading}
                className="w-full text-white bg-gray-800 hover:bg-gray-700"
              >
                {uploading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <UploadCloud className="mr-2 h-4 w-4" />
                    Upload Video
                  </>
                )}
              </Button>

              {status === "success" && (
                <p className="text-sm text-green-600 text-center font-medium">
                  ✅ Upload successful.
                </p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-600 text-center font-medium">
                  ❌ Upload failed. Please try again.
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
