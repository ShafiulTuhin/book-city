"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import Image from "next/image";

const MyProfile = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  const [isOpen, setIsOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");

  React.useEffect(() => {
    if (user) {
      setName(user.name || "");
      setImage(user.image || "");
    }
  }, [user]);

  const updateUser = async () => {
    const { data: res, error } = await authClient.updateUser({
      name,
      image,
    });

    if (error) {
      console.log(error);
      return;
    }

    setIsOpen(false);
    window.location.reload();
  };

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="text-center mt-20 text-red-500 font-semibold">
        No user found. Please login.
      </div>
    );
  }
  return (
    <div className="bg-slate-100 min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <h2 className="text-2xl md:text-3xl font-bold text-[#081f30] mb-8 text-center">
          My Profile
        </h2>

        {/* Profile */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-8 lg:px-20">
          {/* Image */}
          <div className="w-60 h-60 relative mx-auto md:mx-0">
            <Image
              src={user?.image || "/default-avatar.png"}
              alt="user image"
              fill
              className="rounded-full object-cover border-4 border-[#f59e0b] p-3"
            />
          </div>

          {/* Info */}
          <div className="space-y-4 text-center md:text-left">
            <div>
              <p className="text-gray-500 text-sm">Name</p>
              <h3 className="text-xl font-semibold">{user.name}</h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Email</p>
              <h3 className="text-lg">{user.email}</h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Created At</p>
              <h3 className="text-sm">
                {new Date(user.createdAt).toLocaleString()}
              </h3>
            </div>

            <div>
              <p className="text-gray-500 text-sm">Updated At</p>
              <h3 className="text-sm">
                {new Date(user.updatedAt).toLocaleString()}
              </h3>
            </div>

            {/* Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="mt-4 btn bg-[#f59e0b] text-[#081f30] font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[400px] p-6 rounded-xl shadow-lg space-y-4">
            <h2 className="text-xl font-bold text-center">Update Profile</h2>

            {/* Name */}
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered w-full bg-slate-100"
              placeholder="Name"
            />

            {/* Image */}
            <input
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="input input-bordered w-full bg-slate-100"
              placeholder="Image URL"
            />

            {/* Buttons */}
            <div className="flex justify-between gap-3 pt-3">
              <button
                onClick={() => setIsOpen(false)}
                className="btn flex-1 bg-gray-200 py-2 rounded-lg"
              >
                Cancel
              </button>

              <button
                onClick={updateUser}
                className="btn flex-1 bg-[#f59e0b] text-[#081f30] py-2 rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
