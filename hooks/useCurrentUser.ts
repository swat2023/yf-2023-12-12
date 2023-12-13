import { useSession } from "next-auth/react";

const useCurrentUser = () => {
  const { data: session } = useSession();

  const currentUser = {
    email: session?.user.email,
    username: session?.user.username,
  };

  return currentUser;
};

export default useCurrentUser;
