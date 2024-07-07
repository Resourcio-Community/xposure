"use client";
import { useAuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState } from "react";

import picture from "@/assets/img/signin_page.png";
import Image from "next/image";
import Link from "next/link";

const SignIn = () => {
  const { signInWithGoogle, signInWithEmail, user, loading } = useAuthContext();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    router.push("/submission");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signInWithEmail(email, password);
    router.push("/submission");
  };

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
    router.push("/submission");
  };

  return (
    <div className="bg-[#0B0B0B] min-h-screen">
      <div>
        <h2 className="pt-[180px] text-center text-3xl font-extrabold text-[#ffe39c]">
          Welcome Back
        </h2>
      </div>
      <div>
        <div className="max-h-screen flex justify-center pt-12 px-4 sm:px-6 lg:px-8">
          <div className="w-[320px] h-[320px]">
            <Image
              src={picture}
              alt="hero"
              height={320}
              width={320}
              className="mx-auto object-cover h-full object-left-top"
              draggable={false}
            />
          </div>
          <div className="w-[320px] h-[320px] ml-5 border border-spacing-1 border-[#ffe39c] p-5">
            <form className="mt-3 space-y-6 mb-3" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border bg-[#0b0b0b] border-[#ffe39c80] placeholder-[#ffe39c80] text-[#ffe39c] rounded-t-md focus:outline-none focus:ring-[#ffe39c] focus:border-[#ffe39c] focus:z-10 sm:text-sm"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border bg-[#0b0b0b] border-[#ffe39c80] placeholder-[#ffe39c80] text-[#ffe39c] rounded-b-md focus:outline-none focus:ring-[#ffe39c] focus:border-[#ffe39c] focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-[#ffe39caa] focus:ring-[#ffe39c] border-[#ffe39c] rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-xs text-[#ffe39c]"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-xs text-[#ffe39caa] hover:text-[#ffe39c]"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[#ffe39c] hover:bg-[#ffe39caa] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Sign in
                </button>
                <div className="flex items-center justify-between">
                  <div className="pt-3 w-full flex items-center justify-center text-[#ffe39c] hover:text-[#ffe39caa]">
                    <div className="text-xs">
                      <Link href="/signup">New? Create a Account Here.</Link>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={handleGoogleSignIn}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[#ffe39c] hover:bg-[#ffe39caa] focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                Sign in with Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SignIn;
