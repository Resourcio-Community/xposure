"use client";
import Image from "next/image";
import Link from "next/link";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const { signInWithGoogle, user, logOut } = useAuthContext();

  const handleGoogleSignIn = async () => {
    const result = await signInWithGoogle();
    if (result === undefined) return;
    router.push("/");
  };

  return (
    <div className="flex w-full justify-between fixed top-0 px-10 z-50 backdrop-blur-lg">
      <div className="py-4">
        <Image src="/assets/logo.svg" alt="logo" width={60} height={60} />
      </div>

      <div className={`gap-7 text-sm font-poppins font-light text-white ${user ? 'pl-0' : 'pl-28'} items-center tracking-wide md:flex hidden`}>
        <Link href="/" className="hover:text-text_yellow">
          Home
        </Link>
        <Link href="/leaderboard" className="hover:text-text_yellow">
          Leaderboard
        </Link>
        <Link href="/rules" className="hover:text-text_yellow">
          Rules
        </Link>
        <Link href="/prizes" className="hover:text-text_yellow">
          Prizes
        </Link>
        {user && (
          <Link href="/submission" className="hover:text-text_yellow">
            Submission
          </Link>
        )}
      </div>
      <div className="flex items-center">
        {user ? (
          <div className="relative group">
            <Image
              src={user.photoURL || ""}
              width={39}
              height={39}
              alt="user"
              className="rounded-full"
              unoptimized
            />
            <div className="absolute group-hover:scale-100 top-[110%] scale-0 bg-text_yellow/90 px-1 w-[10rem] right-0 duration-300 origin-top-right flex flex-col items-center gap-2 py-4">
              <Image
                src={user.photoURL || ""}
                width={60}
                height={60}
                alt="user"
                className="rounded-full"
                unoptimized
              />
              <Link
                href="/profile"
                className="px-12 py-2 hover:bg-neutral-200 duration-300"
              >
                Profile
              </Link>
              <div className="md:hidden flex flex-col items-center gap-2 mt-4">
                <Link
                  href="/"
                  className="px-4 py-2 hover:bg-neutral-200 duration-300 w-full text-center"
                >
                  Home
                </Link>
                <Link
                  href="/leaderboard"
                  className="px-4 py-2 hover:bg-neutral-200 duration-300 w-full text-center"
                >
                  Leaderboard
                </Link>
                <Link
                  href="/rules"
                  className="px-4 py-2 hover:bg-neutral-200 duration-300 w-full text-center"
                >
                  Rules
                </Link>
                <Link
                  href="/prizes"
                  className="px-4 py-2 hover:bg-neutral-200 duration-300 w-full text-center"
                >
                  Prizes
                </Link>
                {user && (
                  <Link
                    href="/submission"
                    className="px-4 py-2 hover:bg-neutral-200 duration-300 w-full text-center"
                  >
                    Submission
                  </Link>
                )}
              </div>
              <button
                onClick={() => {
                  logOut()
                  router.push('/')
                }}
                className="px-12 py-2 hover:bg-red-400 duration-300"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium text-black bg-text_yellow hover:bg-text_yellow/80 duration-300"
          >
            <h1 className=" hidden md:flex">Sign in with Google</h1>
            <div className="md:hidden flex gap-2 items-center">
              <svg
                width="15"
                height="16"
                viewBox="0 0 15 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.56 5.1C11.2 4.40667 10.7 3.88667 10.06 3.54C9.42 3.18 8.68 3 7.84 3C6.92 3 6.1 3.20667 5.38 3.62C4.66 4.03333 4.09333 4.62 3.68 5.38C3.28 6.14 3.08 7.02 3.08 8.02C3.08 9.02 3.28 9.90667 3.68 10.68C4.09333 11.44 4.66 12.0267 5.38 12.44C6.1 12.8533 6.92 13.06 7.84 13.06C9.08 13.06 10.0867 12.7133 10.86 12.02C11.6333 11.3267 12.1067 10.3867 12.28 9.2H7.06V7.38H14.72V9.16C14.5733 10.24 14.1867 11.2333 13.56 12.14C12.9467 13.0467 12.14 13.7733 11.14 14.32C10.1533 14.8533 9.05333 15.12 7.84 15.12C6.53333 15.12 5.34 14.82 4.26 14.22C3.18 13.6067 2.32 12.76 1.68 11.68C1.05333 10.6 0.74 9.38 0.74 8.02C0.74 6.66 1.05333 5.44 1.68 4.36C2.32 3.28 3.18 2.44 4.26 1.84C5.35333 1.22667 6.54667 0.919999 7.84 0.919999C9.32 0.919999 10.6333 1.28667 11.78 2.02C12.94 2.74 13.78 3.76667 14.3 5.1H11.56Z"
                  fill="#020202"
                />
              </svg>
              <h1>Sign in</h1>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
