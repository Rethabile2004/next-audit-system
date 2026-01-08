// app/dashboard/page.tsx (updated)

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AddTransactionForm from "@/components/transaction/AddTransactionForm";
import TransactionList from "@/components/transaction/TransactionList";
import DashboardSummary from "@/components/transaction/DashboardSummary";
// import ChartsSection from "@/components/transaction/ChartsSection";

export default async function DashboardPage() {
    // const { userId } = await auth();

    // if (!userId) {
    //     redirect("/signin");
    // }

    return (
        <div className="min-h-screen bg-background p-6">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-4xl font-bold mb-2">Flow</h1>
                <p className="text-muted-foreground mb-8">Track your money like a pro.</p>

                <DashboardSummary />
                {/* <ChartsSection /> */}
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="bg-card rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-6">Add Transaction</h2>
                        <AddTransactionForm />
                    </div>

                    <div className="bg-card rounded-xl shadow-lg p-6">
                        <h2 className="text-2xl font-semibold mb-6">Recent Transactions</h2>
                        <TransactionList />
                    </div>
                </div>
            </div>
        </div>
    );
}