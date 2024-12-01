export interface SpotifyTrack {
  item?: {
    name: string;
    artists: Array<{ name: string }>;
    external_urls: { spotify: string };
    album?: {
      images: Array<{
        url: string;
        height: number;
        width: number;
      }>;
    };
  };
  is_playing: boolean;
}