// app/about/page.tsx

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Mail } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-black py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          About FlowStreamline
        </h1>

        <div className="prose prose-lg dark:prose-invert mx-auto mb-16 text-center">
          <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
            FlowStreamline was born from a simple idea: <strong>personal finance doesn't have to be complicated</strong>.
          </p>
          <p className="mt-6 text-gray-600 dark:text-gray-400">
            Most money apps are bloated, confusing, or try to sell you things. We wanted something different — a clean, honest tool that helps you understand your money without the noise.
          </p>
          <p className="mt-6 text-gray-600 dark:text-gray-400">
            Built with modern technology (Next.js, Prisma, Clerk, Shadcn UI), FlowStreamline gives you powerful insights with a beautiful, minimalist interface you’ll actually enjoy using every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                To empower people with clear, actionable financial awareness — helping them make better decisions and build lasting wealth.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Made With ❤️ By</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                A passionate developer who believes great tools should be simple, fast, and respectful of your privacy.
                <br /><br />
                <strong>Rethabile</strong> – Full-Stack Developer & Finance Enthusiast
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <div className="flex justify-center gap-6">
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/Rethabile2004" target="_blank" className="flex items-center gap-2">
                <Github className="h-5 w-5" />
                GitHub
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="mailto:your-email@example.com" className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email Me
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}