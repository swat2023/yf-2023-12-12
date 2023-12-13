"use client";

import { signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import useCurrentUser from "@/hooks/useCurrentUser";

const UserAccountNav = () => {
  const router = useRouter();
  const currentUser = useCurrentUser();

  return (
    <div className="flex " >
      <div className="mr-4 text-center " >{currentUser.username}</div>
      <Button
        onClick={() =>
          signOut({
            // redirect: true,
            redirect: false,
            // not work = > change to use .then()
            // callbackUrl: `${window.location.origin}/sign-in`,
          }).then(() => {
            router.refresh();
            router.push("sign-in");
          })
        }
        variant="destructive"
      >
        Sign Out
      </Button>
    </div>
  );
};

export default UserAccountNav;
