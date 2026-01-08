// actions/createTransaction.ts

"use server";

import { auth } from "@clerk/nextjs/server";
// import { prisma } from "@/lib/prisma";  // Your Prisma client file
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";

export async function createTransaction(data: {
    amount: number;
    type: "income" | "expense";
    description?: string;
    category: string;
    date: string;  // ISO string like "2026-01-07"
}) {
    const { userId } = await auth();

    if (!userId) {
        throw new Error("Unauthorized");
    }

    await prisma.transaction.create({
        data: {
            userId,
            amount: data.amount,
            type: data.type,
            description: data.description || null,
            category: data.category,
            date: new Date(data.date),
        },
    });

    // Refresh the dashboard so new transaction appears instantly
    revalidatePath("/dashboard");
}

export const getTransactions = async () => {
    const userId = await getUid()
    if (!userId) {
        redirect('/signin')
    }
    const transactions= await prisma.transaction.findMany({
        where: {
            userId: userId
        },
        orderBy: {
            date: 'desc'
        }
    })
    return transactions
    //  prisma.transaction.findMany({
    //     where: { userId: userId },
    //     orderBy: { date: "desc" },
    // });
}

const getUid = async () => {
    const { userId } = await auth()
    return userId
}