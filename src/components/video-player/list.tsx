import { ALL_VIDEOS } from "@/constants/videos";
import React from "react";

function VideoList(props: {
  videos: typeof ALL_VIDEOS;
  onVideoChange: (video: (typeof ALL_VIDEOS)[number]) => void;
  onPlaylistUpdate: (videos: typeof ALL_VIDEOS) => void;
}) {
  const { videos, onVideoChange, onPlaylistUpdate } = props;

  const handleDragStart = (e: any, index: number) => {
    e.dataTransfer.setData("startIndex", index);
  };
  const handelDragOver = (e: any) => {
    e.preventDefault();
  };
  const handleDragEnd = (e: any, index: number) => {
    const dragStartIndex = e.dataTransfer.getData("startIndex");
    const dragEndIndex = index;
    const updatedPlaylist = [...videos];
    console.log("dragEndIndex", dragStartIndex, dragEndIndex, index);
    const [removed] = updatedPlaylist.splice(dragStartIndex, 1);
    updatedPlaylist.splice(dragEndIndex, 0, removed);
    onPlaylistUpdate?.(updatedPlaylist);
  };
  return (
    <div className="w-full md:w-1/3 p-4 bg-gray-200 overflow-y-auto md:h-screen h-fit">
      <h2 className="text-lg font-semibold mb-4">Playlist</h2>
      {videos?.map((video, index) => {
        return (
          <div
            draggable={true}
            key={video?.title}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handelDragOver}
            onDrop={(e) => handleDragEnd(e, index)}
            className="cursor-pointer border p-2 mb-2 rounded hover:bg-gray-300 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              onVideoChange?.(video);
            }}
            data-index={index}
          >
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">
                {index + 1}. {video?.title}
              </p>
            </div>
            <p className="text-xs text-gray-500">{video?.description}</p>
          </div>
        );
      })}
    </div>
  );
}

export default VideoList;
