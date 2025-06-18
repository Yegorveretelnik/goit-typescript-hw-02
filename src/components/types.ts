export interface ImageUser {
  name: string;
}

export interface ImageUrls {
  small: string;
  regular: string;
}

export interface Image {
  id: string;
  alt_description: string | null;
  description: string | null;
  likes: number;
  urls: ImageUrls;
  user: ImageUser;
}
