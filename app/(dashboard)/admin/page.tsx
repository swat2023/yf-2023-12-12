import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

async function page() {
  const session = await getServerSession(authOptions);

  // from  /lib/auth.ts = > session
  if (session?.user) {
    return (
      <div>
        <h2 className="text-2xl text-center">Admin page - welcome back </h2>
        <h1 className="text-4xl text-center">{session.user.username} </h1>
      </div>
    );
  }

  return <h2 className="text-2xl">Please login to admin page</h2>;
}

export default page;
