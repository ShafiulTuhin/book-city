"use client";
import Link from "next/link";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

const UpdateUser = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;
  const [name, setName] = React.useState("");
  const [image, setImage] = React.useState("");

  const router = useRouter();

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
    if (res) {
      router.push("/my-profile");
    }
  };
  return (
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
        <div className="flex gap-3 pt-3">
          {/* Cancel */}
          <Link href="/my-profile" className="flex-1">
            <button className="w-full btn bg-gray-200 py-2 rounded-lg">
              Cancel
            </button>
          </Link>

          {/* Save */}
          <button
            onClick={updateUser}
            className="flex-1 btn bg-[#f59e0b] text-[#081f30] py-2 rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
