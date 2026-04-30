"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import LogoImg from "@/assets/logo.png";
import NavLink from "./NavLink";
import avatar from "@/assets/user.png";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { handleGoogleLogin } from "@/lib/data";

const Navbar = () => {
  const { data, isPending } = authClient.useSession();

  const user = data?.user;
  console.log(isPending);

  const [isOpen, setIsOpen] = useState(false);
  const border = "border-1 border-gray-400 rounded-lg";

  const router = useRouter();
  const handleLogout = async () => {
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
            toast.success("Logged out successfully", {
              position: "top-center",
              autoClose: 5000,
            });
          },
        },
      });
    } catch (error) {
      toast.error("Logout failed");
      console.log(error);
    }
  };

  return (
    <div className="border-b">
      <div className="flex justify-between items-center  px-4 ">
        {/* Logo */}
        <Link href={"/"}>
          <Image src={LogoImg} alt="Logo" width={80} height={80} />
        </Link>

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
        {isPending ? (
          <span className="flex justify-center items-center">Loading...</span>
        ) : user ? (
          <div className="hidden md:flex items-center gap-4">
            <div className="text-right">
              <p className="text-green-600 font-semibold text-sm">Welcome!</p>
              <p className="font-bold text-sm">{user?.name}</p>
            </div>
            <Image src={user?.image} alt={user?.name} width={40} height={40} />

            <button
              onClick={handleLogout}
              className="bg-[#f59e0b] text-[#081f30] font-bold hover:opacity-90 transition rounded-lg cursor-pointer px-4 py-2"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-4">
            <Image src={avatar} alt="User" width={40} height={40} />
            <Link href="/login">
              <button className="bg-[#f59e0b] text-[#081f30] font-bold hover:opacity-90 transition rounded-lg cursor-pointer px-4 py-2">
                Login
              </button>
            </Link>

            <button
              onClick={handleGoogleLogin}
              className="border border-[#f59e0b] cursor-pointer rounded-lg p-2"
            >
              <Image
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                // className="w-5 h-5"
                width={20}
                height={20}
              />
            </button>
          </div>
        )}

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
            <NavLink href="/">Home</NavLink>
          </li>

          <li className={`${border}`}>
            <NavLink href="/all-books">All Books</NavLink>
          </li>
          <li className={`${border}`}>
            <NavLink href="/my-profile">My Profile</NavLink>
          </li>
        </ul>

        <div className="">
          {isPending ? (
            <span className="flex justify-center items-center">Loading...</span>
          ) : user ? (
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="md:text-start text-center">
                  <p className="text-green-600 font-semibold">Welcome!</p>
                  <p className="font-bold">{user?.name}</p>
                </div>
              </div>

              <button
                onClick={handleLogout}
                className="btn bg-[#f59e0b] text-[#081f30] hover:opacity-90 transition font-bold cursor-pointer py-2  rounded-lg w-full"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              <Link href="/login">
                <button className="btn bg-[#f59e0b] text-[#081f30] hover:opacity-90 transition py-2  cursor-pointer rounded-lg w-full font-bold">
                  Login
                </button>
              </Link>
              <button
                onClick={handleGoogleLogin}
                className="flex gap-2 border items-center justify-center border-[#f59e0b] py-2 w-full  text-[#081f30] font-bold rounded-lg mx-auto "
              >
                <Image
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  // className="w-5 h-5"
                  width={20}
                  height={20}
                />
                Continue with google
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
