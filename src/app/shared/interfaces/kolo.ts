export interface Kolo {
  id: string;
  name: string;
  koraci: KoloKorak[];
  fullVideo?: KoloVideo;
}

export interface KoloKorak {
  video?: KoloVideo;
  name: string;
}

export interface KoloVideo {
  videoUrl: string;
}
