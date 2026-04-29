"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LogoImg from "@/assets/logo.png";
import NavLink from "./NavLink";
import avatar from "@/assets/user.png";
// import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { FaGoogle } from "react-icons/fa";

const Navbar = () => {
  //   const { data, isPending } = authClient.useSession();

  //   const user = data?.user;
  //   console.log(isPending);

  const [isOpen, setIsOpen] = useState(false);
  const border = "border-1 border-gray-400 py-2 rounded-lg";

  //   const handleGoogleLogin = async () => {
  //     await authClient.signIn.social({
  //       provider: "google",
  //     });
  //   };

  return (
    <div className="border-b">
      <div className="flex justify-between items-center  px-4 ">
        {/* Logo */}
        <div className="text-xl font-bold">
          <Image src={LogoImg} alt="Logo" width={80} height={80} />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center font-bold text-[#797979]">
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/all-books">All Books</NavLink>
          </li>
          <li>
            <NavLink href="/my-profile">My Profile</NavLink>
          </li>
        </ul>

        {/* Desktop Right */}
        {/* {isPending ? (
          <span className="flex justify-center items-center">Loading...</span>
        ) : user ? (
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-green-600 font-semibold text-sm">Welcome!</p>
              <p className="font-bold text-sm">{user?.name}</p>
            </div>
            <Image src={user?.image} alt={user?.name} width={40} height={40} />

            <button
              onClick={async () => {
                (await authClient.signOut(),
                  toast.success("Logged out successfully"));
              }}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg cursor-pointer px-4 py-2"
            >
              Logout
            </button>
          </div>
        ) : ( */}
        <div className="hidden md:flex items-center gap-4">
          <Image src={avatar} alt="User" width={60} height={60} />
          <Link href="/login">
            <button className="bg-[#f59e0b] text-[#081f30] font-bold rounded-lg cursor-pointer px-4 py-2">
              Login
            </button>
          </Link>

          <Button
            // onClick={handleGoogleLogin}
            className="bg-[#f59e0b] text-[#081f30] font-bold rounded-lg"
          >
            <FaGoogle alt="Signin with Google" />
          </Button>
        </div>
        {/* )} */}

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden px-4 pb-4 space-y-4 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <ul className="flex flex-col gap-3 font-bold text-[#797979] bg-white shadow-lg p-4 rounded-lg">
          <li className={`${border}`}>
            <NavLink href="/" className="block w-full">
              Home
            </NavLink>
          </li>
          <li className={`${border}`}>
            <NavLink href="/all-books">All Photo</NavLink>
          </li>
          <li className={`${border}`}>
            <NavLink href="/my-profile">Pricing</NavLink>
          </li>
        </ul>

        <div className="">
          {/* {isPending ? (
            <span className="flex justify-center items-center">Loading...</span>
          ) : user ? (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src={user?.image}
                  alt={user?.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div>
                  <p className="text-green-600 font-semibold">Welcome!</p>
                  <p className="font-bold">{user?.name}</p>
                </div>
              </div>

              <button
                onClick={async () => {
                  (await authClient.signOut(),
                    toast.success("Logged out successfully"));
                }}
                className="btn bg-gradient-to-r from-purple-500 to-pink-500 py-2 text-white rounded-lg w-full"
              >
                Logout
              </button>
            </div>
          ) : ( */}
          <div className="flex flex-col gap-3">
            <Image src={avatar} alt="User" width={40} height={40} />
            <Link href="/login">
              <button className="btn bg-[#f59e0b] py-2  text-[#081f30] rounded-lg w-full font-bold">
                Login
              </button>
            </Link>
            <Button
              // onClick={handleGoogleLogin}
              className="flex gap-2 bg-[#f59e0b] py-2 w-full  text-[#081f30] font-bold rounded-lg"
            >
              <FaGoogle />
              Login with google
            </Button>
          </div>
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
