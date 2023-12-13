"use client"

import { useSession } from "next-auth/react";
import React from "react";

const User = () => {
    // get data from useSession and give name = session
  const { data: session } = useSession();

  return <pre>{JSON.stringify(session)}</pre>;
};

export default User;
