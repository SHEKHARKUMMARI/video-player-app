import { ALL_VIDEOS } from "@/constants/videos";
import React, { Fragment, useEffect, useRef } from "react";

function VideoPalyer(props: { video: (typeof ALL_VIDEOS)[number] }) {
  const { video } = props;

  return (
    <Fragment>
      <div className={"md:w-2/3 w-full p-4 bg-gray-800"} key={video?.id}>
        <video
          controls
          preload="auto"
          aria-label="Video player"
          className="w-full h-auto"
          autoPlay={true}
          playsInline
        >
          <source src={video?.sources[0]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </Fragment>
  );
}

export default VideoPalyer;
