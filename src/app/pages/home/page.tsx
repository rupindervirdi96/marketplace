"use client";
import { useEffect, useState } from "react";
import Post from "@/app/components/post.component";
import Alert from "../../components/alert.component";
import Navbar from "../../components/navbar.component";
import { PostModels } from "../models/post.model";
import { usePathname } from "next/navigation";
import { useStore } from "@/app/redux/store";
import Sidebar from "@/app/components/sidebar.component";
interface HomePageProps {}

export const HomePage = ({ children }: any) => {
  const [posts, setPosts] = useState<Array<PostModels.Post>>(
    useStore((state: any) => state.posts)
  );
  const isShowSidebar = useStore((state: any) => state.isShowSidebar);

  const [hideAlert, isHideAlert] = useState<Boolean>(true);
  const pathName = usePathname();
  const profilePic = "";
  useEffect(() => {
    !hideAlert &&
      setTimeout(() => {
        isHideAlert(true);
      }, 1500);
  }, [hideAlert]);

  return (
    <main
      className={`${
        !isShowSidebar ? "grid-cols-[275px_1fr] grid " : "grid-cols-[0px_1fr] grid"
      } overflow-hidden max-h-screen`}
    >
    {/* //  <main
    //   className="grid-cols-[275px_1fr] md:grid overflow-hidden max-h-screen"
    // > */}
      <Sidebar hidden={isShowSidebar ? true : false} />
      <div className="grid-row-[max-content_max-content] min-h-screen max-h-screen min-w-full items-center justify-between relative ">
        <div
          hidden={!pathName.includes("profile") && !pathName.includes("auth")}
          className="absolute h-full w-full bg-black opacity-25 z-10"
        ></div>
        <Alert hide={hideAlert} message="This is an alert." />
        <Navbar profilePic={profilePic} />
        {children}
        <div
          id="posts"
          className="flex max-h-[calc(100%-92px)] overflow-hidden ml-6"
        >
          <div className="flex min-w-full flex-wrap overflow-y-scroll">
            {posts?.map((post: PostModels.Post, key: React.Key) => (
              <Post key={key} post={post} />
            ))}
            {posts?.map((post: PostModels.Post, key: React.Key) => (
              <Post key={key} post={post} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
