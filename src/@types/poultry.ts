export interface IPoultry {
  id: string;
  type: string;
  birthDate: Date;
  colors: IPoultryColors;
  videos: IPoultryVideos;
  active: boolean;
}

export interface IPoultryColors {
  plumage?: string;
  shins?: string;
  eyes?: string;
}

export interface IPoultryVideos {
  walking?: string;
  presentation?: string;
}
