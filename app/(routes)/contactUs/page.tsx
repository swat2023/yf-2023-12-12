import { getRecommendedVideos } from "@/actions/getRecommendedVideos";
import increaseVideoViewCount from "@/actions/increaseVideoViewCount";

import VideoPlayer from "@/components/video/VideoPlayer";

interface VideoPageParams {
  videoId?: string;
}

export default async function VideoPage({
  params,
}: {
  params: VideoPageParams;
}) {
  //const { videoId } = params;
  const videoId = "6577ecc25cba1ddcd6889bb6";

  const video = await increaseVideoViewCount({ videoId });
 
  // const recommendedVideos = await getRecommendedVideos({ video });

  return (
    <div>
      <div>
        {video ? (
          <div className="overflow-auto flex flex-col lg:flex-row mx-6 mt-2 gap-4">
            <div className="w-full lg:w-3/4 flex flex-col gap-4">
              <VideoPlayer videoSrc={video.videoSrc} />
            </div>
          </div>
        ) : (
          <h1>Video not found</h1>
        )}
      </div>
      <div className="w-full p-10 lg:w-3/4 flex flex-col gap-4">
        <h1 className="text-2xl">
          วิทยาลัยเทคโนโลยีธุรกิจอาหารไทยและนานาชาติ TIFTEC
        </h1>
        <div className="pl-5">
          <p>1004 ถ.พระราม 3 แขวงบางโพงพาง เขตยานนาวา กรุงเทพฯ</p>
          <p>โทร : 0-2682-7644</p>
          <p>อีเมล์ : center@yingsakfood.com</p>
        </div>
      </div>
    </div>
  );
}
