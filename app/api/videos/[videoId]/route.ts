import getCurrentChannel from "@/actions/getCurrentChannel";
//import prisma from "@/vendor/db";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

interface IParams {
  videoId?: string;
}

export async function DELETE(_: Request, { params }: { params: IParams }) {
  const currentChannel = await getCurrentChannel();

  if (!currentChannel) {
    return NextResponse.error();
  }

  const video = await db.video.delete({
    where: {
      id: params.videoId,
    },
  });

  return NextResponse.json(video);
}
