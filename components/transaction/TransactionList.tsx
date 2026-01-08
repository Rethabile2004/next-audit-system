// components/TransactionList.tsx

import prisma from "@/utils/db";
import { auth } from "@clerk/nextjs/server";
import { format } from "date-fns";
import {type Transaction}from '@prisma/client'

export default async function TransactionList() {
  const { userId } = await auth();

  if (!userId) {
    return <p>Please sign in to view transactions.</p>;
  }

  const transactions:Transaction[] = await prisma.transaction.findMany({
    where: { userId },
    orderBy: { date: "desc" },
    take: 10, // Latest 10
  });

  if (transactions.length === 0) {
    return <p className="text-muted-foreground">No transactions yet. Add one!</p>;
  }

  return (
    <div className="space-y-3">
      {transactions.map((t) => (
        <div
          key={t.id}
          className="flex items-center justify-between p-4 bg-muted rounded-lg"
        >
          <div>
            <p className="font-medium">{t.description || t.category}</p>
            <p className="text-sm text-muted-foreground">
              {t.category} • {format(new Date(t.date), "MMM d, yyyy")}
            </p>
          </div>
          <p
            className={`font-bold text-lg ${
              t.type === "income" ? "text-green-600" : "text-red-600"
            }`}
          >
            {t.type === "income" ? "+" : "-"}${t.amount.toFixed(2)}
          </p>
        </div>
      ))}
    </div>
  );
}