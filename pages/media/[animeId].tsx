import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

import { MediaPlayer, MediaProvider } from '@vidstack/react';
import { defaultLayoutIcons, DefaultVideoLayout } from '@vidstack/react/player/layouts/default';

export default function AnimePlayer() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <MediaPlayer
        title="Sprite Fight"
        src="https://files.vidstack.io/sprite-fight/hls/stream.m3u8"
        className="w-full h-full"
      >
        <MediaProvider />
        <DefaultVideoLayout
          thumbnails="https://files.vidstack.io/sprite-fight/thumbnails.vtt"
          icons={defaultLayoutIcons}
        />
      </MediaPlayer>
    </div>
  );
}