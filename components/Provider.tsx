"use client"

import { SessionProvider } from "next-auth/react";
import { FC, ReactNode } from "react";
// FC = functional components

interface ProviderProps {
  children: ReactNode;
}
const Provider: FC<ProviderProps> = ({ children }) => {
  return <SessionProvider>{children} </SessionProvider>;
};

export default Provider;
