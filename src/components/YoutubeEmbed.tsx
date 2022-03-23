import React from 'react';
import styled from '@emotion/styled';

export const VideoContainer = styled.div`
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;

function YoutubeEmbed({ embedId }: { embedId: string | undefined }) {
  return (
    <VideoContainer>
      <iframe
        title="YouTube Trailer"
        id="ytplayer"
        width="auto"
        height="auto"
        src={`https://www.youtube.com/embed/${embedId}?enablejsapi=1&color=white&iv_load_policy=3`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoContainer>
  );
}

export default YoutubeEmbed;
