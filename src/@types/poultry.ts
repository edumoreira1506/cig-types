export interface IPoultry {
  id: string;
  type: string;
  birthDate: Date;
  colors: IPoultryColors;
  videos: IPoultryVideos;
  active: boolean;
  description: string;
  tail: string;
  crest: string;
  dewlap: string;
  register: string;
  name: string;
  gender: string;
  genderCategory: string;
}

export interface IPoultryColors {
  plumage?: string;
  shins?: string;
  eyes?: string;
}

export interface IPoultryVideos {
  walking?: string;
  presentation?: string;
  measurement?: string;
}

export interface IPoultryImage {
  id: string;
  poultryId: string;
  imageUrl: string;
}

export interface IPoultryRegister {
  id: string;
  poultryId: string;
  description: string;
  date: Date;
  type: string;
  files: {
    fileName: string;
  }[]
}
