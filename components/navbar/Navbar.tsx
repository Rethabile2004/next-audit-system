import { links } from "@/utils/links";
import { SignOutButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

const Navbar = async () => {
  const user = await currentUser();
  user?.imageUrl
  return (
    <header className="fixed top-0 w-full bg-teal-600 shadow-md z-50">
      {/* Top bar */}
      <div className="flex justify-end items-center px-6 py-3 gap-x-3">
        <div className="w-8 h-8 rounded-full">
          {user?.id && <img src={user?.imageUrl} alt="profile picture" className="rounded-full w-full object-cover" />}
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-white font-medium">
                Welcome {user.firstName}
              </span>
              <SignOutButton>
                <button className="bg-white text-teal-600 px-3 py-1 rounded-md hover:bg-teal-100 transition">
                  Sign out
                </button>
              </SignOutButton>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link
                href="/signup"
                className="text-white hover:text-teal-200 transition"
              >
                Create account
              </Link>
              <Link
                href="/signin"
                className="text-white hover:text-teal-200 transition"
              >
                Sign in
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Navigation links */}
      <nav className="bg-teal-700 flex justify-between items-center p-3">
        <Link href="/" className="text-white font-bold text-lg tracking-wide p-2">
          Flow Streamline
        </Link>
        <ul className="flex gap-6 px-6 py-2 text-white font-medium capitalize">
          {links.map((link) => {            
            return <li key={link.label}>
              <Link
                href={link.href}
                className="hover:text-teal-300 transition"
              >
                {link.label}
              </Link>
            </li>
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;