// components/ChartsSection.tsx

import { auth } from "@clerk/nextjs/server";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";  // From shadcn chart
import { ChartContainer, ChartConfig } from "@/components/ui/chart";  // shadcn wrappers
import prisma from "@/utils/db";

const COLORS = ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff", "#ff9f40", "#c9cbcf"];

export default async function ChartsSection() {
  const { userId } = await auth();
  if (!userId) return null;

  const transactions = await prisma.transaction.findMany({
    where: { userId },
    orderBy: { date: "desc" },
  });

  // This month's expenses by category
  const now = new Date();
  const thisMonth = now.getMonth();
  const thisYear = now.getFullYear();

  const monthlyExpenses = transactions.filter((t) => {
    const tDate = new Date(t.date);
    return t.type === "expense" && tDate.getMonth() === thisMonth && tDate.getFullYear() === thisYear;
  });

  // Aggregate by category
  const categoryData = monthlyExpenses.reduce((acc, t) => {
    const existing = acc.find((item: any) => item.category === t.category);
    if (existing) {
      existing.amount += t.amount;
    } else {
      acc.push({ category: t.category, amount: t.amount });
    }
    return acc;
  }, [] as { category: string; amount: number }[]);

  // Sort and take top 6 (others grouped if more)
  const sortedCategories = categoryData
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 6);

  if (sortedCategories.length > 0) {
    // Add "Other" if there were more
    const otherAmount = categoryData
      .slice(6)
      .reduce((sum, c) => sum + c.amount, 0);
    if (otherAmount > 0) {
      sortedCategories.push({ category: "Other", amount: otherAmount });
    }
  }

  const pieData = sortedCategories.length > 0 ? sortedCategories : [{ category: "No expenses", amount: 1 }];

  const chartConfig = {
    amount: {
      label: "Amount",
    },
  } satisfies ChartConfig;

  return (
    <div className="grid gap-8 mt-12 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Expenses by Category (This Month)</CardTitle>
        </CardHeader>
        <CardContent>
          {monthlyExpenses.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">No expenses this month yet</p>
          ) : (
            <ChartContainer config={chartConfig} className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="amount"
                    nameKey="category"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label={({ amount }) => `$${amount.toFixed(0)}`}
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </ChartContainer>
          )}
        </CardContent>
      </Card>

      {/* Placeholder for future Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle>Coming Soon: Monthly Trend</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center h-80">
          <p className="text-muted-foreground">Bar chart for income/expenses over time – next!</p>
        </CardContent>
      </Card>
    </div>
  );
}