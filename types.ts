type FormEvent = React.FormEvent<HTMLFormElement>;
type MouseEvent = React.MouseEvent<HTMLButtonElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

type DBUser = {
  name: string;
  photoURL: string;
  email: string;
  img_1: string;
  imgCategory_1: string;
  imgTheme_1: string;
  img_2: string;
  imgCategory_2: string;
  imgTheme_2: string;
  img_3: string;
  imgCategory_3: string;
  imgTheme_3: string;
  reel_1: string;
  reelCategory_1: string;
  reelTheme_1: string;
  reel_2: string;
  reelCategory_2: string;
  reelTheme_2: string;
  txn: string;
};

type ILeaderBoard = {
  name: string;
  photoURL: string;
  imageCount: number;
  reelCount: number;
};

type ImageReelCount = {
  email: string;
  imageCount: number;
  reelCount: number;
};

type UserFetched = {
  name: string;
  photoURL: string;
  email: string;
  images: [{ url: string; theme: string }];
  reels: [{ url: string; theme: string }];
};

type SectionData = {
  section: string | null;
  image: File | null;
  category: string | null;
  theme: string | null;
  url?: string;
};

type FormDataObject = {
  section1: SectionData;
  section2: SectionData;
  section3: SectionData;
};

type ImageUploadFormat = {
  label: string | null;
  file: File | null;
}

export type {
  FormEvent,
  MouseEvent,
  ChangeEvent,
  DBUser,
  ILeaderBoard,
  ImageReelCount,
  UserFetched,
  FormDataObject,
  ImageUploadFormat
};
