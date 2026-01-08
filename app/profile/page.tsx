import { UserProfile } from "@clerk/nextjs";

export default function  ProfilePage() {
  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Your Profile</h1>
        <div className="bg-card rounded-xl shadow-lg p-6">
          <UserProfile 
            appearance={{
              elements: {
                card: "shadow-none border-0",
                pageScrollBox: "p-0",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}