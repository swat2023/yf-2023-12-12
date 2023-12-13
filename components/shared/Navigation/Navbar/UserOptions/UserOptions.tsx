"use client";

import { useContext, useState } from "react";
import { CurrentUserContext } from "@/context/CurrentUserContext";
import { useRouter } from "next/navigation";

import SignInButton from "./SignInButton";
import IconButton from "@/components/shared/IconButton";
import { MdOutlineVideoCall } from "react-icons/md";
import Avatar, { AvatarSize } from "@/components/shared/Avatar";
import UserMenu from "./UserMenu";
import { CurrentChannelContext } from "@/context/CurrentChannelContext";
import { CreateChannelModalContext } from "@/context/CreateChannelModalContext";

const UserOptions = () => {
  const router = useRouter();

  const currentUser = useContext(CurrentUserContext);
  const currentChannel = useContext(CurrentChannelContext);
  const createChannelModal = useContext(CreateChannelModalContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleUploadClick = () => {
    if (!currentChannel) createChannelModal?.onOpen();
    else router.push("/studio/upload");
  };

  return currentUser ? (
    <>
      <div className="flex items-center gap-4 -mr-4">
        <IconButton onClick={handleUploadClick}>
          <MdOutlineVideoCall className="h-7 w-7" />
        </IconButton>
        <Avatar
          className="pr-4"
          size={AvatarSize.medium}
          imageSrc={currentUser.image}
          onClick={() => setMenuOpen(true)}
        />
      </div>
      {menuOpen ? <UserMenu onClose={() => setMenuOpen(false)} /> : null}
    </>
  ) : (
    <SignInButton />
  );
};

export default UserOptions;
