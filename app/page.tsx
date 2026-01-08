// app/page.tsx

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, DollarSign, PieChart, TrendingUp, Shield, Zap } from "lucide-react";
import Image from "next/image";
import image from '@/public/expense.jpg'
export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white dark:from-gray-900 dark:to-black">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Take Control of Your Money with <span className="text-teal-600">FlowStreamline</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
            Simple, beautiful, and powerful personal finance tracking. See where your money goes, set goals, and build better habits — all in one place.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" asChild className="bg-teal-600 hover:bg-teal-700">
              <Link href="/signup">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Everything You Need to Master Your Finances
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <CardTitle>Track Every Transaction</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Add income and expenses instantly with smart categories and descriptions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <PieChart className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <CardTitle>Visual Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Beautiful charts show your spending patterns and monthly trends at a glance.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <CardTitle>Grow Your Wealth</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Understand your habits, reduce unnecessary spending, and watch your balance grow.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security & Speed */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Built for Privacy & Performance</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Shield className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Bank-Level Security</p>
                  <p className="text-gray-600 dark:text-gray-400">Your data is encrypted and protected with industry-leading standards.</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Zap className="h-6 w-6 text-teal-600 flex-shrink-0" />
                <div>
                  <p className="font-medium">Lightning Fast</p>
                  <p className="text-gray-600 dark:text-gray-400">Built on Next.js and modern tech for instant updates and smooth experience.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-200 dark:bg-gray-800 border-2 border-dashed rounded-xl w-full h-96" />
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 px-6 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Start Your Financial Journey Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands who are already in control of their money.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/signup">Create Free Account</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}