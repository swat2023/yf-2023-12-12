import getCurrentUser from "@/actions/getCurrentUser";
//import prisma from "@/vendor/db";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { channelId } = await request.json();

  await db.channel.update({
    where: {
      id: channelId,
    },
    data: {
      subscriberCount: { increment: 1 },
    },
  });

  const subscribedChannelIds = currentUser.subscribedChannelIds;

  subscribedChannelIds.push(channelId);

  const updatedUser = await db.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      subscribedChannelIds,
    },
  });

  return NextResponse.json(updatedUser);
}

export async function DELETE(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { channelId } = await request.json();

  await db.channel.update({
    where: {
      id: channelId,
    },
    data: {
      subscriberCount: { decrement: 1 },
    },
  });

  const subscribedChannelIds = currentUser.subscribedChannelIds.filter(
    (subscribedChannelId) => subscribedChannelId !== channelId
  );

  const updatedUser = await db.user.update({
    where: {
      id: currentUser.id,
    },
    data: {
      subscribedChannelIds,
    },
  });

  return NextResponse.json(updatedUser);
}