import UpdateUser from "@/components/my-profile/UpdateUser";
import React from "react";

export const metadata = {
  title: "Book-City | Update-user",
  description: "Update your information here",
};

const UserUpdatePage = () => {
  return (
    <div>
      <UpdateUser />
    </div>
  );
};

export default UserUpdatePage;
