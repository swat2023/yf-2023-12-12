import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    username: string;
    // isAdmin: boolean;
    // status_1: string;
  }
  interface Session {
    user: User & {
      username: string;
    //   isAdmin: boolean;
    //   status_1: string;
    };
    token: {
      username: string;
    //   isAdmin: boolean;
    //   status_1: string;
    };
  }
}
