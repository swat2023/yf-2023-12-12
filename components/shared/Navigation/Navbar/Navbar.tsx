import Link from 'next/link';
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import NavigationHeader from "../NavigationHeader";
import Search from "./Search";
import UserOptions from "./UserOptions/UserOptions";
import { buttonVariants } from '@/components/ui/button';

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="fixed w-full bg-purple-950 z-20 h-16 px-2 flex flex-row justify-between items-center">
      <NavigationHeader />
      <Search />
      {session?.user ? (
        <UserOptions />
      ) : (
        <Link className={buttonVariants()} href="/sign-in">
            SignIn
          </Link>
      )}
      
    </div>
  );
};

export default Navbar;
{/* <div className="fixed w-full bg-stone-950 z-20 h-16 px-2 flex flex-row justify-between items-center"></div> */}