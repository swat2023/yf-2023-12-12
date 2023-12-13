import getChannelById from "@/actions/getChannelById";
import getCommentsByVideoId from "@/actions/getCommentsByVideoId";
import getTrendingVideos from "@/actions/getTrendingVideos";
import increaseVideoViewCount from "@/actions/increaseVideoViewCount";
import VideoCard from "@/components/shared/VideoCard";
import VideoPlayer from "@/components/video/VideoPlayer";
import Image from "next/image";

export default async function Home() {
  const videoId = "657809462414835ff3a11a1b";

  const video = await increaseVideoViewCount({ videoId });
  const channel = await getChannelById({ channelId: video?.channelId });
  const comments = await getCommentsByVideoId({
    videoId,
  });
  const trendingVideos = await getTrendingVideos();

  return video && channel && comments ? (
    <div className="overflow-auto flex flex-col lg:flex-row mx-6 mt-2 gap-4">
      <div className="w-full lg:w-3/4 ">
        <VideoPlayer videoSrc={video.videoSrc} />
        <h1 className="text-2xl pl-2 pt-2.5">พื้นที่โฆษณา</h1>
        <div className="p-4 flex">
          <div className="p-2">
            <Image src="/images/p001.jpg" alt="" height={200} width={200} />
          </div>
          <div className="p-2">
            <Image src="/images/p002.jpg" alt="" height={200} width={200} />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/4 flex flex-col gap-4 pb-4">
        {trendingVideos
          ? trendingVideos.map((trendingVideos) => {
              return (
                <VideoCard
                  key={trendingVideos.id}
                  isVertical={false}
                  video={trendingVideos}
                  channel={trendingVideos.channel}
                  channelAvatar
                />
              );
            })
          : null}
      </div>
    </div>
  ) : (
    <h1>Video not found</h1>
  );
}
