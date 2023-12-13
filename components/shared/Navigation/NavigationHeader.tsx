"use client";

import { MdMenu } from "react-icons/md";
import IconButton from "../IconButton";
import Logo from "../Logo";
import LogoYf from "@/components/logoYf";
import { useContext } from "react";
import { SidebarContext } from "@/context/SidebarContext";

const NavigationHeader = () => {
  const sidebar = useContext(SidebarContext);

  return (
    <div className="flex flex-row items-center">
      <IconButton
        onClick={() =>
          sidebar?.isOpen ? sidebar.onClose() : sidebar?.onOpen()
        }
      >
        <MdMenu className="h-6 w-6" />
      </IconButton>
      <LogoYf />
    </div>
  );
};

export default NavigationHeader;
