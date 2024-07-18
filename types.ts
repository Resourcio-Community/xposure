type FormEvent = React.FormEvent<HTMLFormElement>;
type MouseEvent = React.MouseEvent<HTMLButtonElement>;
type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

type DBUser = {
  name: string;
  photoURL: string;
  email: string;
  img_1: string;
  imgTheme_1: string;
  img_2: string;
  imgTheme_2: string;
  img_3: string;
  imgTheme_3: string;
  reel_1: string;
  reelTheme_1: string;
  reel_2: string;
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

export type { FormEvent, MouseEvent, ChangeEvent, DBUser, ILeaderBoard, ImageReelCount };
