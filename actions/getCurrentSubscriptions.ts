import { Channel } from "@prisma/client";
import getCurrentUser from "./getCurrentUser";
//import prisma from "@/vendor/db";
import { db } from "@/lib/db"

export default async function getCurrentSubscriptions(): Promise<Channel[]> {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return [];
    }

    const subscriptions = await db.channel.findMany({
      where: {
        id: {
          in: user.subscribedChannelIds,
        },
      },
    });

    return subscriptions;
  } catch (error: any) {
    throw new Error(error);
  }
}