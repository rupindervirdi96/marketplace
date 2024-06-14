import { AuthModels } from "./auth.model";

export namespace PostModels {
  export interface Post {
    id: string;
    title: string;
    description: string;
    pictures: Array<Picture>;
    user: AuthModels.User;
    price: Number;
    date: Date | string;
    location: string;
  }

  export interface Picture {
    id: string;
    alt: string;
    url: string;
    current: Boolean;
  }
}
