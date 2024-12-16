"use client";

import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";

import useAuth from "../shared/hooks/useAuth";

export default function Registration() {
  const auth = useAuth();
  const router = useRouter();

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e.target);
    const inputs = e.target as HTMLFormElement;
    const formData = new FormData(inputs);

    if (inputs.confirmPassword.value != inputs.password.value) {
    }

    formData.delete("confirmPassword");

    const result = await fetch("http://localhost:3200/register", {
      method: "POST",
      body: formData,
    });

    const json = await result.json();
    console.log(json);

    const user = {
      name: formData.get("name"),
    };
    auth.setUser(user as any);

    router.push("/home");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md space-y-8 content-center">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Or &nbsp;
            <a className="font-medium text-indigo-500 hover:text-indigo-400">
              sign in to your existing account
            </a>
          </p>
        </div>
        <form onSubmit={register} className="mt-8 space-y-6 flex flex-col">
          <div className="py-1">
            <div className="py-1">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                autoComplete="name"
                className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Name"
                name="name"
              />
            </div>

            <div className="py-1">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                autoComplete="email"
                className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Email address"
                type="email"
                name="email"
              />
            </div>
            <div className="py-1">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                autoComplete="current-password"
                className="relative block w-full appearance-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Password"
                type="password"
                name="password"
              />
            </div>
            <div className="py-1">
              <label htmlFor="confirmPassword" className="sr-only">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                autoComplete="current-password"
                className="relative block w-full appearance-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                placeholder="Confirm Password"
                type="password"
                name="confirmPassword"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
