"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect } from "react";

export default function Login() {
  useEffect(() => {
    const wind = window as any;
    wind.fbAsyncInit = function () {
      wind.FB.init({
        appId: "1879934572441815",
        cookie: false,
        xfbml: true,
        version: "v19.0",
      });

      wind.FB.AppEvents.logPageView();
    };
  }, []);

  const login = () => {
    (window as any).FB.login((response: any) => {
      (window as any).FB.api(
        "/me",
        { fields: "name, email" },
        function (response: any) {
          // TODO: update to redirect

          console.log(JSON.stringify(response));
        },
      );
    });
  };

  return (
    <div className="font-[sans-serif] text-[#333] ">
      <Script
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0&appId=1655946491841486"
        async
        defer
      />

      <div className="grid lg:grid-cols-3 md:grid-cols-2 items-center lg:gap-8 gap-4 h-full">
        <div className="max-md:order-1 lg:col-span-2 md:h-screen w-full bg-[#000842] md:rounded-tr-xl md:rounded-br-xl lg:p-12 p-8">
          <Image
            className="lg:w-[70%] w-full h-full object-contain block mx-auto"
            alt="loginImg"
            src="/images/ftns.png"
            width={500}
            height={500}
          />
        </div>
        <div className="w-full p-6">
          <form>
            <div className="mb-12">
              <h3 className="text-3xl font-extrabold">Sign in</h3>
              <p className="text-sm mt-4">
                Don&apos;t have an account
                <a className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                  Register here
                </a>
              </p>
            </div>
            <div>
              <label htmlFor="email" className="text-xs block mb-2">
                Email
              </label>
              <div className="relative flex items-center">
                <input
                  id="email"
                  name="email"
                  type="text"
                  required
                  className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
                  placeholder="Enter email"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 682.667 682.667"
                >
                  <defs>
                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                      <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                    </clipPath>
                  </defs>
                  <g
                    clip-path="url(#a)"
                    transform="matrix(1.33 0 0 -1.33 0 682.667)"
                  >
                    <path
                      fill="none"
                      strokeWidth="40"
                      d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                      data-original="#000000"
                    ></path>
                  </g>
                </svg>
              </div>
            </div>
            <div className="mt-8">
              <label className="text-xs block mb-2">Password</label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  required
                  className="w-full text-sm border-b border-gray-300 focus:border-[#333] px-2 py-3 outline-none"
                  placeholder="Enter password"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#bbb"
                  stroke="#bbb"
                  className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                  viewBox="0 0 128 128"
                >
                  <path
                    d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                    data-original="#000000"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between gap-2 mt-5">
              <div>
                <a
                  href="jajvascript:void(0);"
                  className="text-blue-600 font-semibold text-sm hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
            </div>
            <div className="mt-12">
              <button
                type="button"
                className="w-full shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
              >
                Sign in
              </button>
            </div>
            <p className="my-8 text-sm text-gray-400 text-center">
              or continue with
            </p>
            <div className="space-x-8 flex justify-center">
              <button
                type="button"
                className="border-none outline-none"
                onClick={login}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30px"
                  fill="#007bff"
                  viewBox="0 0 167.657 167.657"
                >
                  <path
                    d="M83.829.349C37.532.349 0 37.881 0 84.178c0 41.523 30.222 75.911 69.848 82.57v-65.081H49.626v-23.42h20.222V60.978c0-20.037 12.238-30.956 30.115-30.956 8.562 0 15.92.638 18.056.919v20.944l-12.399.006c-9.72 0-11.594 4.618-11.594 11.397v14.947h23.193l-3.025 23.42H94.026v65.653c41.476-5.048 73.631-40.312 73.631-83.154 0-46.273-37.532-83.805-83.828-83.805z"
                    data-original="#010002"
                  ></path>
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
