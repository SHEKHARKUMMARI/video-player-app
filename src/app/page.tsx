"use client";
import VideoList from "@/components/video-player/play-list";
import VideoPalyer from "@/components/video-player/video-container";
import { ALL_VIDEOS } from "@/constants/videos";

import { useState } from "react";

export default function Home() {
  const [currentVideo, setCurrentVideo] = useState<(typeof ALL_VIDEOS)[number]>(
    ALL_VIDEOS[0]
  );
  const [allVideos, setAllVideos] = useState<typeof ALL_VIDEOS>(ALL_VIDEOS);
  const onVideoChange = (video: (typeof ALL_VIDEOS)[number]) => {
    setCurrentVideo(video);
  };
  const handlePlaylistUpdate = (videos: typeof ALL_VIDEOS) => {
    setAllVideos(videos);
  };

  return (
    <div>
      <header className="bg-blue-500 text-white p-4 w-full text-center text-lg font-semibold">
        Video Player App
      </header>
      <div className={`flex flex-col-reverse md:flex-row w-full bg-gray-100`}>
        <VideoList
          videos={allVideos}
          onVideoChange={onVideoChange}
          onPlaylistUpdate={handlePlaylistUpdate}
        />
        <VideoPalyer video={currentVideo} />
      </div>
    </div>
  );
}
