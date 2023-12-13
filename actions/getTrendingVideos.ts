//import prisma from "@/vendor/db";
import { db } from "@/lib/db";
import { Channel, Video } from "@prisma/client";

export default async function getTrendingVideos(): Promise<
  (Video & { channel: Channel })[]
> {
  try {
    const startDate = new Date();
    // set startDate ย้อนหลัง 1 เดือน
    startDate.setMonth(startDate.getMonth() - 1);

    const videos = await db.video.findMany({
      include: {
        channel: true,
      },
      where: {
        createdAt: {
          // gte = greater than or equal
          gte: startDate,
        },
      },
      orderBy: [
        {
          viewCount: "desc",
        },
      ],
      // take 50 videos
      take: 50,
    });

    return videos;
  } catch (error: any) {
    throw new Error(error);
  }
}
