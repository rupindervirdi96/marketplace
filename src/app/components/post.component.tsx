import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AuthModels } from "../pages/models/auth.model";
import Image from "next/image";
import leftArrowIcon from "../assets/leftArrow.svg";
import rightArrowIcon from "../assets/rightArrow.svg";
import { changePicture } from "../helpers/post.helper";
import { PostModels } from "../pages/models/post.model";
import accountIcon from "../assets/account.svg";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";

interface PostProps {
  post?: PostModels.Post;
}

export const Post = ({ post }: PostProps) => {
  const router = useRouter();
  const { id, title, description, user, pictures, price, date, location } =
    post as PostModels.Post;
  const [pics, setPics] = useState<Array<PostModels.Picture>>(pictures);

  // useEffect(() => {
  //   setPics(post?.pictures as any);
  // }, [post]);

  const currPicture: PostModels.Picture = pics?.find(
    (picture: PostModels.Picture) => picture?.current
  ) as PostModels.Picture;

  return (
    <div className="min-w-60 max-w-64 grid bg-gray-100 rounded-md ml-0 m-6 transition-all">
      <div id="carousel" className="relative">
        <div className="grid place-items-center bg-slate-400 hover:bg-slate-200 opacity-40 absolute top-[50%] left-0 translate-y-[-50%]">
          <Image
            onClick={() => changePicture("left", pics, setPics)}
            className="hover:scale-125"
            alt="My SVG"
            src={leftArrowIcon}
          />
        </div>
        <img
          className="h-52 min-w-full max-w-full object-cover rounded-t-md"
          src={currPicture?.url as string}
          alt={currPicture?.alt as string}
        />
        <div
          id="carousel-indicators"
          className="absolute bg-gray-400 rounded-md opacity-50 p-1 flex left-[50%] top-[110%] translate-x-[-50%] translate-y-[-100%]"
        >
          {pics &&
            pics?.map((picture: PostModels.Picture, key: React.Key) => (
              <div
                key={key}
                className={`h-2 w-2 mx-1 rounded-full border-[1.5px] ${
                  picture.current && "bg-black"
                } border-gray-700`}
              ></div>
            ))}
        </div>
        <div className="h-6 w-6 grid place-items-center bg-slate-400 hover:bg-slate-200 opacity-40 absolute top-[50%] left-[100%] translate-y-[-50%] translate-x-[-100%]">
          <Image
            onClick={() => changePicture("right", pics, setPics)}
            className="hover:scale-125"
            alt="My SVG"
            src={rightArrowIcon}
          />
        </div>
      </div>
      <div className="p-2 pt-8 rounded-b-md">
        <h1 className="text-sm">{title}</h1>
        <span className="text-xs text-gray-600 block ">{location}</span>
        <span className="text-xs text-gray-600 block ">{date.toString()}</span>
        <div className="grid bg-gray-300 rounded-md grid-cols-[max-content_1fr] mt-2">
          <div className="grid place-items-center p-1">
            <Image
              onClick={() => changePicture("left", pics, setPics)}
              className="h-10 w-10 "
              alt="My SVG"
              src={accountIcon}
            />
          </div>
          <div className="grid grid-rows-2">
            <Link
              href={`/pages/profile/${user?.name.split(" ")[0]}`}
              // onClick={(e) => {
              //   e.preventDefault();
              //   // router.push(`/pages/profile/${user?.name.split(" ")[0]}`);
              //   // window.history.pushState(
              //   //   { user },
              //   //   "",
              //   //   `/pages/profile/${user?.name.split(" ")[0]}`
              //   // );
              //   window.location.href = `/pages/profile/${
              //     user?.name.split(" ")[0]
              //   }`;
              // }}
              // href={``}
              className="text-gray-600 text-sm flex items-end hover:underline"
            >
              {user?.name}
            </Link>
            <span className="text-gray-600 text-xs flex items-start">
              {user?.memberSince}
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          alert("XYZ");
        }}
        className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-b-md"
      >
        View
      </button>
    </div>
  );
};

export default Post;
