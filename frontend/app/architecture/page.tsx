"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Navbar from "@/components/ui/navbar";
export default function ArchitecturePage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen py-12 px-4 lg:px-12 bg-background text-foreground">
        <div className="max-w-5xl mx-auto space-y-8">
          <h1 className="text-3xl font-bold tracking-tight">
            Serverless Architecture Overview
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed">
            This AI-powered video captioning platform is built entirely on a
            serverless, event-driven architecture using AWS. It enables users to
            upload videos, automatically generate subtitles, and stream
            processed content globally.
          </p>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">
                🧱 High-Level Architecture
              </h2>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <li>
                  <strong>Frontend:</strong> Next.js (App Router) with
                  TailwindCSS and ShadCN for modern UI
                </li>
                <li>
                  <strong>Storage:</strong> Videos uploaded directly to S3 via
                  presigned URLs
                </li>
                <li>
                  <strong>Processing:</strong> S3 triggers a Lambda that starts
                  Transcription & FFmpeg processing
                </li>
                <li>
                  <strong>Compute:</strong> Transcribe handles subtitle
                  generation; FFmpeg runs in ECS Fargate
                </li>
                <li>
                  <strong>Database:</strong> DynamoDB stores metadata, status,
                  and references
                </li>
                <li>
                  <strong>Streaming:</strong> CloudFront distributes videos
                  globally with low latency
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">📦 AWS Services Used</h2>
            </CardHeader>
            <CardContent className="grid md:grid-cols-2 gap-6 text-sm text-muted-foreground">
              <div>
                <h3 className="font-medium mb-2 text-foreground">
                  Compute & Processing
                </h3>
                <ul className="space-y-2">
                  <li>✅ AWS Lambda (event-driven logic & orchestration)</li>
                  <li>
                    ✅ AWS ECS Fargate (FFmpeg container for video encoding)
                  </li>
                  <li>
                    ✅ AWS Transcribe (speech-to-text subtitle generation)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2 text-foreground">
                  Storage & Distribution
                </h3>
                <ul className="space-y-2">
                  <li>✅ Amazon S3 (video & caption storage)</li>
                  <li>✅ Amazon CloudFront (global video streaming CDN)</li>
                  <li>✅ DynamoDB (track upload status, metadata)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">⚙️ Workflow Summary</h2>
            </CardHeader>
            <CardContent className="space-y-4 text-sm text-muted-foreground">
              <ol className="space-y-3 list-decimal list-inside">
                <li>User uploads a video via a presigned S3 URL</li>
                <li>S3 event triggers a Lambda function</li>
                <li>
                  Lambda invokes:
                  <ul className="list-disc list-inside ml-6">
                    <li>AWS Transcribe to generate subtitles</li>
                    <li>FFmpeg running in ECS Fargate to encode the video</li>
                  </ul>
                </li>
                <li>Processed outputs are stored in S3</li>
                <li>DynamoDB is updated with video metadata & status</li>
                <li>
                  Users can stream the final video + captions via CloudFront
                </li>
              </ol>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">
                🔐 Security & Best Practices
              </h2>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="list-disc list-inside">
                <li>Presigned S3 URLs prevent direct exposure of S3 buckets</li>
                <li>
                  IAM roles restrict access between Lambda, ECS, and services
                </li>
                <li>
                  S3 bucket policies enforce fine-grained read/write permissions
                </li>
                <li>
                  CloudFront signed URLs can be used for secure streaming
                  (optional)
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h2 className="text-xl font-semibold">🌍 Why Serverless?</h2>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="list-disc list-inside">
                <li>Auto-scaling for spikes in upload or processing demand</li>
                <li>No servers to maintain or patch</li>
                <li>Pay-as-you-go for all compute and storage components</li>
                <li>Built-in high availability across AWS services</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
