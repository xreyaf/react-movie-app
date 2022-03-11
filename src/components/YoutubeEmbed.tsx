import { VideoContainer } from "./styles/VideoContainer.Styled";

const YoutubeEmbed = ({ embedId }: { embedId: string | undefined }) => {

  return (
    <VideoContainer>
      <iframe
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
};

export default YoutubeEmbed;