import { create } from "zustand";
import { AuthModels } from "../pages/models/auth.model";
import { PostModels } from "../pages/models/post.model";
import { devtools } from "zustand/middleware";

type AppState = {
  posts: Array<Object>;
  isShowSidebar: boolean;
  showSidebar: (isShowSidebar: AppState["isShowSidebar"]) => void;
};

export const useStore = create<AppState>()(
  devtools((set) => ({
    posts: [
      {
        id: "001",
        description: "This is the description",
        pictures: [
          {
            id: "1",
            current: true,
            alt: "This is an image",
            url: "https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000",
          },
          {
            id: "2",
            current: false,
            alt: "This is an image",
            url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png",
          },
        ],
        title: "Title",
        price: 123,
        user: new AuthModels.User("1", "John Don", "Member since 4 years"),
        location: "Maqsudan, Jalandhar",
        date: new Date().toLocaleDateString(),
      },
      {
        id: "002",
        description: "desc",
        pictures: [
          {
            id: "1",
            current: true,
            alt: "This is an image",
            url: "https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000",
          },
          {
            id: "2",
            current: false,
            alt: "This is an image",
            url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png",
          },
          {
            id: "3",
            current: false,
            alt: "This is an image",
            url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png",
          },
        ],
        title: "Title",
        price: 123,
        user: new AuthModels.User("1", "Sukhdeep", "Member since 2022"),
        location: "Maqsudan, Jalandhar",
        date: new Date().toLocaleDateString(),
      },
      {
        id: "002",
        description: "desc",
        pictures: [
          {
            id: "1",
            current: true,
            alt: "This is an image",
            url: "https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000",
          },
          {
            id: "2",
            current: false,
            alt: "This is an image",
            url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png",
          },
          {
            id: "3",
            current: false,
            alt: "This is an image",
            url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png",
          },
        ],
        title: "Title",
        price: 123,
        user: new AuthModels.User("1", "Sukhdeep", "Member since 2022"),
        location: "Maqsudan, Jalandhar",
        date: new Date().toLocaleDateString(),
      },
      {
        id: "002",
        description: "desc",
        pictures: [
          {
            id: "1",
            current: true,
            alt: "This is an image",
            url: "https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000",
          },
          {
            id: "2",
            current: false,
            alt: "This is an image",
            url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png",
          },
          {
            id: "3",
            current: false,
            alt: "This is an image",
            url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png",
          },
        ],
        title: "Title",
        price: 123,
        user: new AuthModels.User("1", "Sukhdeep", "Member since 2022"),
        location: "Maqsudan, Jalandhar",
        date: new Date().toLocaleDateString(),
      },
      {
        id: "002",
        description: "desc",
        pictures: [
          {
            id: "1",
            current: true,
            alt: "This is an image",
            url: "https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000",
          },
          {
            id: "2",
            current: false,
            alt: "This is an image",
            url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png",
          },
          {
            id: "3",
            current: false,
            alt: "This is an image",
            url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png",
          },
        ],
        title: "Title",
        price: 123,
        user: new AuthModels.User("1", "Sukhdeep", "Member since 2022"),
        location: "Maqsudan, Jalandhar",
        date: new Date().toLocaleDateString(),
      },
      {
        id: "002",
        description: "desc",
        pictures: [
          {
            id: "1",
            current: true,
            alt: "This is an image",
            url: "https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000",
          },
          {
            id: "2",
            current: false,
            alt: "This is an image",
            url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png",
          },
          {
            id: "3",
            current: false,
            alt: "This is an image",
            url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png",
          },
        ],
        title: "Title",
        price: 123,
        user: new AuthModels.User("1", "Sukhdeep", "Member since 2022"),
        location: "Maqsudan, Jalandhar",
        date: new Date().toLocaleDateString(),
      },
      {
        id: "002",
        description: "desc",
        pictures: [
          {
            id: "1",
            current: true,
            alt: "This is an image",
            url: "https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000",
          },
          {
            id: "2",
            current: false,
            alt: "This is an image",
            url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png",
          },
          {
            id: "3",
            current: false,
            alt: "This is an image",
            url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png",
          },
        ],
        title: "Title",
        price: 123,
        user: new AuthModels.User("1", "Sukhdeep", "Member since 2022"),
        location: "Maqsudan, Jalandhar",
        date: new Date().toLocaleDateString(),
      },
      {
        id: "002",
        description: "desc",
        pictures: [
          {
            id: "1",
            current: true,
            alt: "This is an image",
            url: "https://cc-prod.scene7.com/is/image/CCProdAuthor/adobe-firefly-marquee-text-to-image-0-desktop-1000x1000?$pjpeg$&jpegSize=300&wid=1000",
          },
          {
            id: "2",
            current: false,
            alt: "This is an image",
            url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png",
          },
          {
            id: "3",
            current: false,
            alt: "This is an image",
            url: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2020/05/Frame-9.png",
          },
        ],
        title: "Title",
        price: 123,
        user: new AuthModels.User("1", "Sukhdeep", "Member since 2022"),
        location: "Maqsudan, Jalandhar",
        date: new Date().toLocaleDateString(),
      },
    ],
    isShowSidebar: false,
    showSidebar: () => {
      set((state) => ({ isShowSidebar: !state.isShowSidebar }));
    },
  }))
);
