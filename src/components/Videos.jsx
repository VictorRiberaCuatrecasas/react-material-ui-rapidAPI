import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({videos}) => {
  console.log(videos)
return (
    <Stack direction={"column" || "row"} flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
      {/* {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} /> }
          {item.id.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))} */}
      <Box>Videos</Box>
    </Stack>
  );
}

export default Videos;