import getCurrentUser from "@/actions/getCurrentUser";
//import prisma from "@/vendor/db";
import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { name, handle, imageSrc } = await request.json();

  const channel = await db.channel.create({
    data: {
      name,
      handle,
      imageSrc,
      userId: currentUser.id,
    },
  });

  return NextResponse.json(channel);
}

// export async function UPDATE(request: Request) {
//   const currentUser = await getCurrentUser();

//   if (!currentUser) {
//     return NextResponse.error();
//   }
  
//   const { name, handle, imageSrc, channelId } = await request.json();

//   const channel = await db.channel.update({
//     where: {
//       id: channelId
//     },
//     data: {
//       name,
//       handle,
//       imageSrc,
//       userId: currentUser.id,
//     },
//   });

//   return NextResponse.json(channel);
// }