import React from 'react';
import MuxPlayer from '@mux/mux-player-react';

interface VideoPlayerProps {
  onPlayerReady: (event: any) => void;
  playbackId: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ onPlayerReady, playbackId }) => {
  return (
    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
      <MuxPlayer
        onLoadedMetadata={onPlayerReady}
        streamType="on-demand"
        playbackId={playbackId}
        metadata={{
          video_id: playbackId,
          video_title: "Tennis Analysis Video",
          viewer_user_id: "user-id-007",
        }}
      />
    </div>
  );
};

export default VideoPlayer;